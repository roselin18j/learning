import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import ApiError from "../../utils/ApiError.js";
import cloudinary from "../../config/cloudinary.js";
import uploadImage from "../../utils/uploadImage.js";
import EventService from "./event.service.js";

class EventController {

  /**
   * GET /api/v1/event
   */
  getEventPage = asyncHandler(async (req, res) => {

    const event = await EventService.getEventPage();

    return res.status(200).json(
      new ApiResponse(
        200,
        "Event page fetched successfully.",
        event
      )
    );

  });

  /**
   * POST /api/v1/event
   */
  createEventPage = asyncHandler(async (req, res) => {

    const event = await EventService.createEventPage();

    return res.status(201).json(
      new ApiResponse(
        201,
        "Event page created successfully.",
        event
      )
    );

  });

  /**
   * PUT /api/v1/event/header
   */
  updateEventHeader = asyncHandler(async (req, res) => {

    const header = await EventService.updateEventHeader(req.body);

    return res.status(200).json(
      new ApiResponse(
        200,
        "Event header updated successfully.",
        header
      )
    );

  });

  /**
   * POST /api/v1/event/item
   */
  addEvent = asyncHandler(async (req, res) => {

    if (!req.file) {
      throw new ApiError(400, "Event image is required.");
    }

    const image = await uploadImage(
      req.file.path,
      "ngo/events"
    );

    const event = await EventService.addEvent({
      ...req.body,
      image,
    });

    return res.status(201).json(
      new ApiResponse(
        201,
        "Event added successfully.",
        event
      )
    );

  });

  /**
   * PUT /api/v1/event/item/:eventId
   */
  updateEvent = asyncHandler(async (req, res) => {

    const page = await EventService.getEventPage();

    const event = page.eventSection.events.id(
      req.params.eventId
    );

    if (!event) {
      throw new ApiError(404, "Event not found.");
    }

    let data = {
      ...req.body,
    };

    if (req.file) {

      if (event.image?.publicId) {
        await cloudinary.uploader.destroy(
          event.image.publicId
        );
      }

      const image = await uploadImage(
        req.file.path,
        "ngo/events"
      );

      data.image = image;
    }

    const updatedEvent = await EventService.updateEvent(
      req.params.eventId,
      data
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Event updated successfully.",
        updatedEvent
      )
    );

  });

  /**
   * DELETE /api/v1/event/item/:eventId
   */
  deleteEvent = asyncHandler(async (req, res) => {

    const page = await EventService.getEventPage();

    const event = page.eventSection.events.id(
      req.params.eventId
    );

    if (!event) {
      throw new ApiError(404, "Event not found.");
    }

    if (event.image?.publicId) {
      await cloudinary.uploader.destroy(
        event.image.publicId
      );
    }

    await EventService.deleteEvent(
      req.params.eventId
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Event deleted successfully."
      )
    );

  });

  getEventBySlug = asyncHandler(async (req, res) => {

    const event = await EventService.getEventBySlug(req.params.slug);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Event fetched successfully.",
            event
        )
    );

});

}

export default new EventController();