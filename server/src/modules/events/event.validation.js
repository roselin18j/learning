import { body, validationResult } from "express-validator";

/**
 * Validate Event Header
 */
export const validateEventHeader = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

/**
 * Validate Event
 */
export const validateEvent = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("slug")
    .trim()
    .notEmpty()
    .withMessage("Slug is required"),

  body("shortDescription")
    .trim()
    .notEmpty()
    .withMessage("Short description is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),

  body("eventDate")
    .notEmpty()
    .withMessage("Event date is required")
    .isISO8601()
    .withMessage("Invalid event date"),

  body("location")
    .trim()
    .notEmpty()
    .withMessage("Location is required"),

  body("status")
    .optional()
    .isIn(["Upcoming", "Ongoing", "Completed"])
    .withMessage("Invalid status"),

  body("homepageOrder")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Homepage order must be at least 1"),

  body("showOnHomepage")
    .optional()
    .isBoolean()
    .withMessage("Show on homepage must be true or false"),

  body("isPublished")
    .optional()
    .isBoolean()
    .withMessage("Published status must be true or false"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];