import { model, Model, Schema } from "mongoose";

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
