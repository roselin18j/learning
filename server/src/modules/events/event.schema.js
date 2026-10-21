import mongoose from "mongoose";

const { Schema } = mongoose;

export const eventHeaderSchema = new Schema(
  {
    badge: {
      type: String,
      default: "Our Events",
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

export const eventItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
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

      alt: {
        type: String,
        default: "",
      },
    },

    eventDate: {
      type: Date,
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Upcoming", "Ongoing", "Completed"],
      default: "Upcoming",
    },

    homepageOrder: {
      type: Number,
      default: 1,
    },

    showOnHomepage: {
      type: Boolean,
      default: true,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const eventsSchema = new Schema(
  {
    header: {
      type: eventHeaderSchema,
      default: () => ({}),
    },

    events: {
      type: [eventItemSchema],
      default: [],
    },
  },
  { _id: false }
);