import mongoose from "mongoose";

const { Schema } = mongoose;

export const serviceHeaderSchema = new Schema(
  {
    badge: {
      type: String,
      default: "Our Services",
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

export const serviceItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      url: {
        type: String,
        required: true,
      },
      publicId: {
        type: String,
        required: true,
      },
    },

    homepageOrder: {
      type: Number,
      default: 1,
      min: 1,
    },

    showOnHomepage: {
      type: Boolean,
      default: false,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  }
);

export const servicesSchema = new Schema(
  {
    header: {
      type: serviceHeaderSchema,
      default: () => ({}),
    },

    services: {
      type: [serviceItemSchema],
      default: [],
    },
  },
  { _id: false }
);