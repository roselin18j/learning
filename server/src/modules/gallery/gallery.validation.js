import { body } from "express-validator";

/*
|--------------------------------------------------------------------------
| Category Validation
|--------------------------------------------------------------------------
*/

export const createCategoryValidation = [

  body("name")
    .trim()
    .notEmpty()
    .withMessage("Category name is required.")
    .isLength({ max: 100 })
    .withMessage("Category name cannot exceed 100 characters."),

  body("slug")
    .trim()
    .notEmpty()
    .withMessage("Slug is required.")
    .isSlug()
    .withMessage("Slug must be valid."),

  body("order")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Order must be at least 1."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Status must be true or false."),

];

export const updateCategoryValidation = [

  body("name")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Category name cannot exceed 100 characters."),

  body("slug")
    .optional()
    .trim()
    .isSlug()
    .withMessage("Slug must be valid."),

  body("order")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Order must be at least 1."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Status must be true or false."),

];
/*
|--------------------------------------------------------------------------
| Video Validation
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| Video Validation
|--------------------------------------------------------------------------
*/

export const createVideoValidation = [

  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ max: 150 })
    .withMessage("Title cannot exceed 150 characters."),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required."),

  body("description")
    .optional()
    .trim(),

  body("alt")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Alt text cannot exceed 150 characters."),

  body("order")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Order must be at least 1."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Status must be true or false."),

];

export const updateVideoValidation = [

  body("title")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Title cannot exceed 150 characters."),

  body("category")
    .optional()
    .trim(),

  body("description")
    .optional()
    .trim(),

  body("alt")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Alt text cannot exceed 150 characters."),

  body("order")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Order must be at least 1."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Status must be true or false."),

];

/*
|--------------------------------------------------------------------------
| Image Validation
|--------------------------------------------------------------------------
*/

export const createImageValidation = [

  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ max: 150 })
    .withMessage("Title cannot exceed 150 characters."),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required."),

  body("description")
    .optional()
    .trim(),

  body("alt")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Alt text cannot exceed 150 characters."),

  body("order")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Order must be at least 1."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Status must be true or false."),

];

export const updateImageValidation = [

  body("title")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Title cannot exceed 150 characters."),

  body("category")
    .optional()
    .trim(),

  body("description")
    .optional()
    .trim(),

  body("alt")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Alt text cannot exceed 150 characters."),

  body("order")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Order must be at least 1."),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Status must be true or false."),

];