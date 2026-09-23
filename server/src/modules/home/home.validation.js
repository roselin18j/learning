import { body } from "express-validator";

/* ==========================================================================
   Create Hero Slide
========================================================================== */

export const createHeroSlideValidation = [
  body("badge")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Badge must not exceed 100 characters."),

  body("title")
    .notEmpty()
    .withMessage("Title is required.")
    .trim()
    .isLength({ max: 200 })
    .withMessage("Title must not exceed 200 characters."),

  body("subtitle")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Subtitle must not exceed 200 characters."),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Description must not exceed 1000 characters."),

  body("primaryButton.text")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Primary button text must not exceed 50 characters."),

  body("primaryButton.link")
    .optional()
    .trim(),

  body("secondaryButton.text")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Secondary button text must not exceed 50 characters."),

  body("secondaryButton.link")
    .optional()
    .trim(),

  body("image.url")
    .optional()
    .trim(),

  body("image.publicId")
    .optional()
    .trim(),

  body("imageAlt")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Image alt text must not exceed 150 characters."),

  body("overlayOpacity")
    .optional()
    .isFloat({ min: 0, max: 1 })
    .withMessage("Overlay opacity must be between 0 and 1."),

  body("order")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Order must be at least 1."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive must be true or false."),
];

/* ==========================================================================
   Update Hero Slide
========================================================================== */

export const updateHeroSlideValidation = [
  body("badge")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Badge must not exceed 100 characters."),

  body("title")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Title must not exceed 200 characters."),

  body("subtitle")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Subtitle must not exceed 200 characters."),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Description must not exceed 1000 characters."),

  body("primaryButton.text")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Primary button text must not exceed 50 characters."),

  body("primaryButton.link")
    .optional()
    .trim(),

  body("secondaryButton.text")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Secondary button text must not exceed 50 characters."),

  body("secondaryButton.link")
    .optional()
    .trim(),

  body("image.url")
    .optional()
    .trim(),

  body("image.publicId")
    .optional()
    .trim(),

  body("imageAlt")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Image alt text must not exceed 150 characters."),

  body("overlayOpacity")
    .optional()
    .isFloat({ min: 0, max: 1 })
    .withMessage("Overlay opacity must be between 0 and 1."),

  body("order")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Order must be at least 1."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive must be true or false."),
];

/* ==========================================================================
   Update Hero Settings
========================================================================== */

export const updateHeroSettingsValidation = [
  body("autoPlay")
    .optional()
    .isBoolean()
    .withMessage("Auto Play must be true or false."),

  body("autoPlaySpeed")
    .optional()
    .isInt({ min: 1000 })
    .withMessage("Auto Play Speed must be at least 1000 ms."),

  body("showNavigation")
    .optional()
    .isBoolean()
    .withMessage("Show Navigation must be true or false."),

  body("showPagination")
    .optional()
    .isBoolean()
    .withMessage("Show Pagination must be true or false."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Hero status must be true or false."),
];



/* ==========================================================================
   Update About Section
========================================================================== */



export const updateAboutSectionValidation = [

  body("badge")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Badge must not exceed 100 characters."),

  body("title")
    .notEmpty()
    .withMessage("Title is required.")
    .trim()
    .isLength({ max: 200 })
    .withMessage("Title must not exceed 200 characters."),

  body("description")
    .notEmpty()
    .withMessage("Description is required.")
    .trim()
    .isLength({ max: 1500 })
    .withMessage("Description must not exceed 1500 characters."),

  body("features")
    .optional()
    .customSanitizer((value) => {
      if (typeof value === "string") {
        return JSON.parse(value);
      }
      return value;
    })
    .isArray({ max: 4 })
    .withMessage("Maximum 4 features are allowed."),

  body("features.*.title")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Feature title must not exceed 100 characters."),

  body("features.*.description")
    .optional()
    .trim()
    .isLength({ max: 250 })
    .withMessage("Feature description must not exceed 250 characters."),

  // Frontend sends imageAlt
  body("imageAlt")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Image alt text must not exceed 150 characters."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive must be true or false."),

];