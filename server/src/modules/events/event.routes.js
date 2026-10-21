import express from "express";
import upload from "../../middleware/upload.middleware.js";
import EventController from "./event.controller.js";
import {
  validateEventHeader,
  validateEvent,
} from "./event.validation.js";

const router = express.Router();

/**
 * GET Event Page
 */
router.get(
  "/",
  EventController.getEventPage
);

/**
 * CREATE Event Page (Only Once)
 */
router.post(
  "/",
  EventController.createEventPage
);

/**
 * UPDATE Event Header
 */
router.put(
  "/header",
  validateEventHeader,
  EventController.updateEventHeader
);

/**
 * ADD Event
 */
router.post(
  "/item",
  upload.single("image"),
  validateEvent,
  EventController.addEvent
);

/**
 * UPDATE Event
 */
router.put(
  "/item/:eventId",
  upload.single("image"),
  validateEvent,
  EventController.updateEvent
);

/**
 * DELETE Event
 */
router.delete(
  "/item/:eventId",
  EventController.deleteEvent
);

router.get("/:slug", EventController.getEventBySlug);

export default router;