import { Model, model, Schema } from "mongoose";

const authorSchema = new Schema<IAuthor>(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
  },
  {
    toJSON: {
      versionKey: false,
      virtuals: true,
    },
    toObject: {
      versionKey: false,
      virtuals: true,
    },
    timestamps: true,
  },
);

authorSchema.virtual("books", {
  ref: "book",
  localField: "_id",
  foreignField: "author",
});

const authorModel: Model<IAuthor> = model<IAuthor>("author", authorSchema);

export default authorModel;
