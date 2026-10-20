import mongoose from "mongoose";
import {
  aboutSchema,
  heroSchema,
  serviceSchema,
  whyChooseSchema,
} from "./home.schema.js";

const { Schema, model } = mongoose;

const homeSchema = new Schema(
  {
    hero: {
      type: heroSchema,
      default: () => ({}),
    },

    aboutSection: {
      type: aboutSchema,
      default: () => ({}),
    },

    services: {
      type: serviceSchema,
      default: () => ({}),
    },

    whyChoose: {
      type: whyChooseSchema,
      default: () => ({}),
    },
  },
  {
    timestamps: true,
  }
);

const Home = model("Home", homeSchema);

export default Home;