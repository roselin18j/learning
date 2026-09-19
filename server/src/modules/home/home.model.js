import mongoose from "mongoose";
import { heroSchema } from "./home.schema.js";

const { Schema, model } = mongoose;

const homeSchema = new Schema(
  {
    hero: {
      type: heroSchema,
      default: () => ({}),
    },
  },
  {
    timestamps: true,
  }
);

const Home = model("Home", homeSchema);

export default Home;