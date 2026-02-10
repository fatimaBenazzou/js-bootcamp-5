import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true },
);

const todoModel = model("todo", todoSchema);
export default todoModel;
