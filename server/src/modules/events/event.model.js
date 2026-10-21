import mongoose from "mongoose";
import { eventsSchema } from "./event.schema.js";

const { Schema, model } = mongoose;

const eventPageSchema = new Schema(
  {
    eventSection: {
      type: eventsSchema,
      default: () => ({}),
    },
  },
  {
    timestamps: true,
    collection: "eventpages",
  }
);

const EventPage = model("EventPage", eventPageSchema);

export default EventPage;