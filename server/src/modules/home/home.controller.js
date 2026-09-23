import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import ApiError from "../../utils/ApiError.js";
import cloudinary from "../../config/cloudinary.js";
import HomeService from "./home.service.js";
import uploadImage from "../../utils/uploadImage.js";

class HomeController {

  getHome = asyncHandler(async (req, res) => {
    const home = await HomeService.getHome();

    return res.status(200).json(
      new ApiResponse(
        200,
        "Home data fetched successfully.",
        home
      )
    );
  });

  /*
   * POST /api/v1/home
   */

  createHome = asyncHandler(async (req, res) => {
    const home = await HomeService.createHome(req.body);

    return res.status(201).json(
      new ApiResponse(
        201,
        "Home created successfully.",
        home
      )
    );
  });

  /**
   * PUT /api/v1/home/hero/settings
   */
  updateHeroSettings = asyncHandler(async (req, res) => {
    const home = await HomeService.updateHeroSettings(req.body);

    return res.status(200).json(
      new ApiResponse(
        200,
        "Hero settings updated successfully.",
        home
      )
    );
  });

/**
 * POST /api/v1/home/hero/slide
 */
addHeroSlide = asyncHandler(async (req, res) => {

  console.log("========== HERO UPLOAD ==========");
  console.log("Body:", req.body);
  console.log("File:", req.file);

  if (!req.file) {
    throw new ApiError(400, "Hero image is required.");
  }

  const image = await uploadImage(
    req.file.path,
    "ngo/home/hero"
  );

  console.log("Cloudinary Upload Success:", image);

  const home = await HomeService.addHeroSlide({
    ...req.body,
    image,
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      "Hero slide added successfully.",
      home
    )
  );
});


  /**
   * PUT /api/v1/home/hero/slide/:slideId
   */

  updateHeroSlide = asyncHandler(async (req, res) => {

  const home = await HomeService.getHome();

  const slide = home.hero.slides.id(req.params.slideId);

  if (!slide) {
    throw new ApiError(404, "Hero slide not found.");
  }

  let data = {
    ...req.body,
  };

  if (req.file) {

    // Delete old Cloudinary image
    if (slide.image?.publicId) {

      const deleted = await cloudinary.uploader.destroy(
        slide.image.publicId
      );

      console.log("Cloudinary Delete:", deleted);
    }

    // Upload new image
    const image = await uploadImage(
      req.file.path,
      "ngo/home/hero"
    );

    data.image = image;
  }

  const hero = await HomeService.updateHeroSlide(
    req.params.slideId,
    data
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Hero updated successfully.",
      hero
    )
  );
});

  /**
   * DELETE /api/v1/home/hero/slide/:slideId
   */
deleteHeroSlide = asyncHandler(async (req, res) => {

  const home = await HomeService.getHome();

  const slide = home.hero.slides.id(req.params.slideId);

  if (!slide) {
    throw new ApiError(404, "Hero slide not found.");
  }

  if (slide.image?.publicId) {

    const deleted = await cloudinary.uploader.destroy(
      slide.image.publicId
    );

    console.log("Cloudinary Delete:", deleted);
  }

  await HomeService.deleteHeroSlide(req.params.slideId);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Hero slide deleted successfully."
    )
  );
});

getAbout = asyncHandler(async (req, res) => {

const about = await HomeService.getAboutSection();

  return res.status(200).json(
    new ApiResponse(
      200,
      "About fetched successfully.",
      about
    )
  );
});

updateAbout = asyncHandler(async (req, res) => {

  let data = { ...req.body };

  if (data.features && typeof data.features === "string") {
    data.features = JSON.parse(data.features);
  }

  const currentAbout = await HomeService.getAboutSection();


  if (req.file) {

    const deleted = await cloudinary.uploader.destroy(
      currentAbout.image.publicId
    );

    const image = await uploadImage(
      req.file.path,
      "ngo/home/about"
    );

    data.image = {
      url: image.url,
      publicId: image.publicId,
      alt: data.imageAlt || "About Us",
    };
  }

  const about = await HomeService.updateAboutSection(data);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Updated",
      about
    )
  );
});


/**
 * GET Services Section
 */
getServicesSection = asyncHandler(async (req, res) => {

  const service = await HomeService.getServiceSection();

  return res.status(200).json(
    new ApiResponse(
      200,
      "Services fetched successfully.",
      service
    )
  );

});


/**
 * UPDATE Services Section
 */
updateServicesSection = asyncHandler(async (req, res) => {

  const data = {
    ...req.body,
  };

  const service = await HomeService.updateServiceSection(data);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Services updated successfully.",
      service
    )
  );

});

}

export default new HomeController();