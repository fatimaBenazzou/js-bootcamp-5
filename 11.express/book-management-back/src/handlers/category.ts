import { StatusCodes } from "http-status-codes";
import categoryModel from "../models/category.js";
import { Request, Response } from "express";
import { logger } from "../utils/logger.js";
import bookModel from "../models/book.js";

export async function getCategories(
  _req: Request,
  res: Response,
): Promise<void> {
  try {
    const categories = await categoryModel.find().sort({ name: 1 });
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    logger.error("Error fetching categories:", { error });
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to fetch categories",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function getCategoryById(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const category = await categoryModel.findById(req.params.id);
    if (!category) {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Category not found",
      });
      return;
    }
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Category fetched successfully",
      data: category,
    });
  } catch (error) {
    logger.error("Error fetching category:", { error });
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Failed to fetch category ${req.params.id}`,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function createCategory(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const category = await categoryModel.create(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Category created successfully",
      data: category.toObject ? category.toObject() : category,
    });
  } catch (error) {
    logger.error("Error creating category:", { error });
    const err = error as Error & { code?: number };

    if (err.code === 11000) {
      res.status(StatusCodes.CONFLICT).json({
        success: false,
        message: "Category already exists",
        error: err.message || "Duplicate category",
      });
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Failed to create category",
        error: err.message || String(error),
      });
    }
  }
}

export async function updateCategory(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const category = await categoryModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    if (!category) {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Category not found",
      });
      return;
    }
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    logger.error("Error updating category:", { error });
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Failed to update category ${req.params.id}`,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function deleteCategory(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    // Check if any books reference this category before deleting
    const bookCount = await bookModel.countDocuments({
      category: req.params.id,
    });
    if (bookCount > 0) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: `Cannot delete category with ${bookCount} associated book(s). Reassign them first.`,
      });
      return;
    }

    const category = await categoryModel.findByIdAndDelete(req.params.id);
    if (!category) {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Category not found",
      });
      return;
    }
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Category deleted successfully",
      data: category,
    });
  } catch (error) {
    logger.error("Error deleting category:", { error });
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Failed to delete category ${req.params.id}`,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
