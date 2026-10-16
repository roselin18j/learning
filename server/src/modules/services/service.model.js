import mongoose from "mongoose";
import { servicesSchema } from "./service.schema.js";

const { Schema, model } = mongoose;

const servicePageSchema = new Schema(
  {
    serviceSection: {
      type: servicesSchema,
      default: () => ({}),
    },
  },
  {
    timestamps: true,
  }
);

const ServicePage = model("ServicePage", servicePageSchema);

export default ServicePage;