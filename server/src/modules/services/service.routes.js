import express from "express";
import upload from "../../middleware/upload.middleware.js";
import ServiceController from "./service.controller.js";
import {
  validateServiceHeader,
  validateService,
} from "./service.validation.js";

const router = express.Router();

/**
 * GET Service Page
 */
router.get(
  "/",
  ServiceController.getServicePage
);

/**
 * CREATE Service Page (Only Once)
 */
router.post(
  "/",
  ServiceController.createServicePage
);

/**
 * UPDATE Header
 */
router.put(
  "/header",
  validateServiceHeader,
  ServiceController.updateServiceHeader
);

/**
 * ADD Service
 */
router.post(
  "/item",
  upload.single("image"),
  validateService,
  ServiceController.addService
);

/**
 * UPDATE Service
 */
router.put(
  "/item/:serviceId",
  upload.single("image"),
  validateService,
  ServiceController.updateService
);

/**
 * DELETE Service
 */
router.delete(
  "/item/:serviceId",
  ServiceController.deleteService
);

export default router;