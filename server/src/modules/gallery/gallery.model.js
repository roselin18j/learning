import mongoose from "mongoose";
import { gallerySchema } from "./gallery.schema.js";

const { Schema, model } = mongoose;

const galleryPageSchema = new Schema(
  {
    gallerySection: {
      type: gallerySchema,
      default: () => ({}),
    },
  },
  {
    timestamps: true,
  }
);

const GalleryPage = model("GalleryPage", galleryPageSchema);

export default GalleryPage;