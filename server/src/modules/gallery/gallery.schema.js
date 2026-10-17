import mongoose from "mongoose";

const { Schema } = mongoose;

/* ==========================================================================
   Gallery Category Schema
========================================================================== */

export const galleryCategorySchema = new Schema(
  {
    name: {
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

    description: {
      type: String,
      default: "",
      trim: true,
    },

    order: {
      type: Number,
      default: 1,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    _id: true,
  }
);

/* ==========================================================================
   Gallery Image Schema
========================================================================== */

export const galleryImageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
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

    showOnHomepage: {
      type: Boolean,
      default: false,
    },

    homepageOrder: {
      type: Number,
      default: 1,
    },

    order: {
      type: Number,
      default: 1,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    _id: true,
  }
);

/* ==========================================================================
   Gallery Video Schema
========================================================================== */

export const galleryVideoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    thumbnail: {
      url: {
        type: String,
        required: true,
      },

      publicId: {
        type: String,
        required: true,
      },
    },

    video: {
      url: {
        type: String,
        required: true,
      },

      publicId: {
        type: String,
        required: true,
      },
    },

    duration: {
      type: Number,
      default: 0,
    },

    showOnHomepage: {
      type: Boolean,
      default: false,
    },

    homepageOrder: {
      type: Number,
      default: 1,
    },

    order: {
      type: Number,
      default: 1,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    _id: true,
  }
);

/* ==========================================================================
   Gallery Schema
========================================================================== */

export const gallerySchema = new Schema(
  {
    categories: {
      type: [galleryCategorySchema],
      default: [],
    },

    images: {
      type: [galleryImageSchema],
      default: [],
    },

    videos: {
      type: [galleryVideoSchema],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);