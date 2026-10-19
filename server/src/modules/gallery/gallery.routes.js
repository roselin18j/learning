import { Router } from "express";
import GalleryController from "./gallery.controller.js";
import upload from "../../middleware/uploadGallery.middleware.js";
import validateRequest from "../../middleware/validation.middleware.js";
import {
  createCategoryValidation,
  updateCategoryValidation,
  createImageValidation,
  updateImageValidation,
  createVideoValidation,
  updateVideoValidation,
} from "./gallery.validation.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Gallery
|--------------------------------------------------------------------------
*/

router.post(
  "/",
  GalleryController.createGallery
);

router.get(
  "/",
  GalleryController.getGallery
);

/*
|--------------------------------------------------------------------------
| Categories
|--------------------------------------------------------------------------
*/

router.get(
  "/categories",
  GalleryController.getCategories
);

router.post(
  "/categories",
  createCategoryValidation,
  validateRequest,
  GalleryController.createCategory
);

router.put(
  "/categories/:categoryId",
  updateCategoryValidation,
  validateRequest,
  GalleryController.updateCategory
);

router.delete(
  "/categories/:categoryId",
  GalleryController.deleteCategory
);

/*
|--------------------------------------------------------------------------
| Images
|--------------------------------------------------------------------------
*/

router.get(
  "/images",
  GalleryController.getImages
);

router.post(
  "/images",
  upload.single("image"),
  createImageValidation,
  validateRequest,
  GalleryController.createImage
);

router.put(
  "/images/:imageId",
  upload.single("image"),
  updateImageValidation,
  validateRequest,
  GalleryController.updateImage
);

router.delete(
  "/images/:imageId",
  GalleryController.deleteImage
);

/*
|--------------------------------------------------------------------------
| Videos
|--------------------------------------------------------------------------
*/

router.get(
  "/videos",
  GalleryController.getVideos
);

router.post(
  "/videos",
  upload.single("video"),
  createVideoValidation,
  validateRequest,
  GalleryController.createVideo
);

router.put(
  "/videos/:videoId",
  upload.single("video"),
  updateVideoValidation,
  validateRequest,
  GalleryController.updateVideo
);

router.delete(
  "/videos/:videoId",
  GalleryController.deleteVideo
);

router.get(
    "/images/homepage",
    GalleryController.getHomepageImages
);

router.get(
    "/videos/homepage",
    GalleryController.getHomepageVideos
);

export default router;