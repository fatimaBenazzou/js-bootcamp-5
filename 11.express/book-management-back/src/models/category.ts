import { model, Model, Schema } from "mongoose";
import type { ICategory } from "../types/models/category.js";

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const categoryModel: Model<ICategory> = model<ICategory>(
  "category",
  categorySchema,
);

export default categoryModel;
