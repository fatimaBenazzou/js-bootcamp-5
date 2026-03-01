import { Schema, model, type Model } from "mongoose";

/**
 * Rating schema definition
 * Defines the structure of rating documents in MongoDB
 */
const rateSchema = new Schema<IRating>(
  {
    ratedBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "books",
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Ensure one rating per user per book
rateSchema.index({ ratedBy: 1, bookId: 1 }, { unique: true });

const rateModel: Model<IRating> = model<IRating>("ratings", rateSchema);

export default rateModel;
