import { Router } from "express";
import upload from "../../middleware/upload.middleware.js";
import HomeController from "./home.controller.js";

import {
  createHeroSlideValidation,
  updateHeroSlideValidation,
  updateHeroSettingsValidation,
} from "./home.validation.js";

import validationMiddleware from "../../middleware/validation.middleware.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Home
|--------------------------------------------------------------------------
*/

router.get("/", HomeController.getHome);

router.post("/", HomeController.createHome);

/*
|--------------------------------------------------------------------------
| Hero
|--------------------------------------------------------------------------
*/

router.put(
  "/hero/settings",
  updateHeroSettingsValidation,
  validationMiddleware,
  HomeController.updateHeroSettings
);

router.post(
  "/hero/slide",
  (req, res, next) => {
    console.log("✅ Hero route hit");
    next();
  },
  upload.single("image"),
  createHeroSlideValidation,
  validationMiddleware,
  HomeController.addHeroSlide
);

router.put(
  "/hero/slides/:slideId",
  upload.single("image"),
  updateHeroSlideValidation,
  validationMiddleware,
  HomeController.updateHeroSlide
);

router.delete(
  "/hero/slides/:slideId",
  HomeController.deleteHeroSlide
);

export default router;