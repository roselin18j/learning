import mongoose from "mongoose";

const { Schema } = mongoose;


const heroSlideSchema = new Schema(
  {
    badge: {
      type: String,
      default: "",
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    primaryButton: {
      text: {
        type: String,
        default: "",
      },
      link: {
        type: String,
        default: "",
      },
    },

    secondaryButton: {
      text: {
        type: String,
        default: "",
      },
      link: {
        type: String,
        default: "",
      },
    },

  image: {
    url: {
        type: String,
        default: "",
    },

    publicId: {
        type: String,
        default: "",
    }
},

    imageAlt: {
      type: String,
      default: "",
      trim: true,
    },

    overlayOpacity: {
      type: Number,
      default: 0.5,
      min: 0,
      max: 1,
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
  }
);

const heroSchema = new Schema(
  {
    autoPlay: {
      type: Boolean,
      default: true,
    },

    autoPlaySpeed: {
      type: Number,
      default: 5000,
      min: 1000,
    },

    showNavigation: {
      type: Boolean,
      default: true,
    },

    showPagination: {
      type: Boolean,
      default: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    slides: {
      type: [heroSlideSchema],
      default: [],
    },
  },
  {
    _id: false,
  }
);

/* ---------------- About Preview ---------------- */

const aboutSchema = new Schema(
  {
    title: String,
    subtitle: String,
    description: String,

    image: String,

    buttonText: String,

    buttonLink: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);


/* ---------------- Services ---------------- */

const serviceItemSchema = new Schema(
  {
    title: String,

    shortDescription: String,

    image: String,

    icon: String,

    slug: String,

    order: Number,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const servicesSchema = new Schema(
  {
    title: String,

    subtitle: String,

    description: String,

    services: [serviceItemSchema],

    buttonText: String,

    buttonLink: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

/* ---------------- Why Choose Us ---------------- */

const whyChooseItemSchema = new Schema(
  {
    title: String,

    description: String,

    icon: String,
  },
  { _id: false }
);

const whyChooseSchema = new Schema(
  {
    title: String,

    subtitle: String,

    image: String,

    points: [whyChooseItemSchema],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

/* ---------------- Impact Counter ---------------- */

const counterSchema = new Schema(
  {
    title: String,

    value: Number,

    suffix: String,

    icon: String,
  },
  { _id: false }
);

const impactSchema = new Schema(
  {
    title: String,

    counters: [counterSchema],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

/* ---------------- Events ---------------- */

const eventsSchema = new Schema(
  {
    title: String,

    subtitle: String,

    totalShow: {
      type: Number,
      default: 3,
    },

    buttonText: String,

    buttonLink: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

/* ---------------- Gallery ---------------- */

const gallerySchema = new Schema(
  {
    title: String,

    subtitle: String,

    totalShow: {
      type: Number,
      default: 8,
    },

    buttonText: String,

    buttonLink: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

/* ---------------- Transparency ---------------- */

const transparencySchema = new Schema(
  {
    title: String,

    subtitle: String,

    description: String,

    buttonText: String,

    buttonLink: String,

    image: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

/* ---------------- Donation CTA ---------------- */

const donationSchema = new Schema(
  {
    title: String,

    subtitle: String,

    description: String,

    buttonText: String,

    buttonLink: String,

    backgroundImage: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

/* ---------------- SEO ---------------- */

const seoSchema = new Schema(
  {
    metaTitle: String,

    metaDescription: String,

    keywords: [String],

    ogImage: String,
  },
  { _id: false }
);

/* ---------------- Home ---------------- */

const homeSchema = new Schema(
  {
    hero: heroSchema,

    about: aboutSchema,

    services: servicesSchema,

    whyChoose: whyChooseSchema,

    impact: impactSchema,

    events: eventsSchema,

    gallery: gallerySchema,

    transparency: transparencySchema,

    donation: donationSchema,

    seo: seoSchema,
  },
  {
    timestamps: true,
  }
);


export {
  heroSlideSchema,
  heroSchema,
};