import mongoose from "mongoose";
import { aboutSchema, heroSchema, servicesSchema } from "./home.schema.js";

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
    serviceSchema: {
      type: servicesSchema,
      default: () => ({}),
    },
  },
  {
    timestamps: true,
  }
);

const Home = model("Home", homeSchema);

export default Home;