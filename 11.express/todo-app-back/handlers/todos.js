import { StatusCodes } from "http-status-codes";
import todoModel from "../models/todos.js";
import {
  createdResponse,
  errorResponse,
  paginatedResponse,
  successResponse,
} from "../utils/responseFormatter.js";

export async function getTodos(req, res) {
  const userId = req.user._id;
  const {
    search,
    status,
    sortBy = "createdAt",
    order = "desc",
    page = 1,
    limit = 5,
  } = req.query;

  // pagination
  const pageNum = Math.max(1, parseInt(page, 10) || 1);
  const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 10));
  const skip = (pageNum - 1) * limitNum;

  // filter
  const filter = { user: userId };
  if (search) {
    filter.text = { $regex: search, $options: "i" };
  }

  if (status === "completed") {
    filter.isComplete = true;
  } else if (status === "active") {
    filter.isComplete = false;
  }

  // sorting
  const allowedFields = ["createdAt", "text"];
  const sortField = allowedFields.includes(sortBy) ? sortBy : "createdAt";
  const sortOrder = order === "asc" ? 1 : -1;
  const sort = { [sortField]: sortOrder };

  //
  const totalItems = await todoModel.countDocuments(filter);
  const totalPages = Math.max(1, Math.ceil(totalItems / limitNum));
  console.log({ filter });
  try {
    const todos = await todoModel
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limitNum);

    paginatedResponse(res, todos, {
      currentPage: pageNum,
      totalPages,
      totalItems,
      itemsPerPage: limitNum,
      hasNextPage: pageNum < totalPages,
      hasPrevPage: pageNum > 1,
    });
  } catch (error) {
    errorResponse(res, error, "Error fetching Todos", StatusCodes.BAD_REQUEST);
  }
}

export async function createTodo(req, res) {
  const { text } = req.body;

  if (typeof text != "string" || !text.trim())
    throw new Error("Text is required and must be a non empty-string");

  try {
    const newTodo = new todoModel({
      text: text.trim(),
      user: req.user._id,
    });

    await newTodo.save();

    createdResponse(res, newTodo, "Todo created Successfully");
    // res.status(StatusCodes.CREATED).json({
    //   success: true,
    //   data: newTodo,
    //   message: "Todo created Successfully",
    // });
  } catch (error) {
    errorResponse(
      res,
      error,
      "Error creating new Todo",
      StatusCodes.BAD_REQUEST,
    );
    // res.status(StatusCodes.BAD_REQUEST).json({
    //   success: false,
    //   message: "Error creating new Todo",
    //   error: error.message || error,
    // });
  }
}

export async function editTodo(req, res) {
  const { id } = req.params;
  const userId = req.user._id;
  const { text, isComplete } = req.body;

  try {
    const updatedTodo = await todoModel.findOneAndUpdate(
      { _id: id, user: userId },
      { text: text, isComplete },
      { new: true },
    );

    if (!updatedTodo) throw new Error("Todo not found.");

    successResponse(res, updatedTodo, "Todo updated successfully !");
  } catch (error) {
    errorResponse(res, error, "Failed to update todo");
  }
}

export async function deleteTodo(req, res) {
  const userId = req.user._id;
  const { id } = req.params;

  try {
    const deletedTodo = await todoModel.findOneAndDelete({
      _id: id,
      user: userId,
    });

    if (!deletedTodo) throw new Error("Todo not found.");

    successResponse(res, null, "Todo deleted successfully");
  } catch (error) {
    errorResponse(res, error, "Failed to delete todo");
  }
}

export async function deleteCompletedTodos(req, res) {
  const userId = req.user._id;

  try {
    const result = await todoModel.deleteMany({
      isComplete: true,
      user: userId,
    });

    successResponse(
      res,
      { deletedCount: result.deletedCount },
      "Completed todos deleted successfully !",
    );
  } catch (error) {
    errorResponse(res, error, "Failed to delete completed todos");
  }
}
