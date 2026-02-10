import { StatusCodes } from "http-status-codes";
import todoModel from "../models/todos.js";
import {
  createdResponse,
  errorResponse,
  successResponse,
} from "../utils/responseFormatter.js";

export async function getTodos(req, res) {
  const userId = req.user._id;
  try {
    const todos = await todoModel.find({ user: userId });

    successResponse(res, todos, "Todos fetched successfully !");
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

export async function edit() {}

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
