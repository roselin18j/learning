import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import ApiError from "../../utils/ApiError.js";
import cloudinary from "../../config/cloudinary.js";
import uploadImage from "../../utils/uploadImage.js";
import ServiceService from "./service.service.js";

class ServiceController {

  /**
   * GET /api/v1/service
   */
  getServicePage = asyncHandler(async (req, res) => {

    const service = await ServiceService.getServicePage();

    return res.status(200).json(
      new ApiResponse(
        200,
        "Service page fetched successfully.",
        service
      )
    );

  });

  /**
   * POST /api/v1/service
   */
  createServicePage = asyncHandler(async (req, res) => {

    const service = await ServiceService.createServicePage();

    return res.status(201).json(
      new ApiResponse(
        201,
        "Service page created successfully.",
        service
      )
    );

  });

  /**
   * PUT /api/v1/service/header
   */
  updateServiceHeader = asyncHandler(async (req, res) => {

    const header = await ServiceService.updateServiceHeader(req.body);

    return res.status(200).json(
      new ApiResponse(
        200,
        "Service header updated successfully.",
        header
      )
    );

  });

  /**
   * POST /api/v1/service/item
   */
addService = asyncHandler(async (req, res) => {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
        throw new ApiError(400, "Service image is required.");
    }

    const image = await uploadImage(req.file.path, "ngo/services");

    console.log("IMAGE:", image);

    const service = await ServiceService.addService({
        ...req.body,
        image,
    });

    return res.status(201).json(
        new ApiResponse(201, "Service added successfully.", service)
    );
});

  /**
   * PUT /api/v1/service/item/:serviceId
   */
  updateService = asyncHandler(async (req, res) => {

    const page = await ServiceService.getServicePage();

    const service = page.serviceSection.services.id(
      req.params.serviceId
    );

    if (!service) {
      throw new ApiError(404, "Service not found.");
    }

    let data = {
      ...req.body,
    };

    if (req.file) {

      if (service.image?.publicId) {

        await cloudinary.uploader.destroy(
          service.image.publicId
        );

      }

      const image = await uploadImage(
        req.file.path,
        "ngo/services"
      );

      data.image = image;

    }

    const updatedService =
      await ServiceService.updateService(
        req.params.serviceId,
        data
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Service updated successfully.",
        updatedService
      )
    );

  });

  /**
   * DELETE /api/v1/service/item/:serviceId
   */
  deleteService = asyncHandler(async (req, res) => {

    const page = await ServiceService.getServicePage();

    const service = page.serviceSection.services.id(
      req.params.serviceId
    );

    if (!service) {
      throw new ApiError(404, "Service not found.");
    }

    if (service.image?.publicId) {

      await cloudinary.uploader.destroy(
        service.image.publicId
      );

    }

    await ServiceService.deleteService(
      req.params.serviceId
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Service deleted successfully."
      )
    );

  });

}

export default new ServiceController();