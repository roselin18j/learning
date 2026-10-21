import { Router } from "express";
import { homeRoutes } from "../../modules/home/index.js";
import { serviceRoutes } from "../../modules/services/index.js";
import galleryRoutes from "../../modules/gallery/index.js";
import { eventRoutes } from "../../modules/events/index.js";

const router = Router();

router.use("/home", homeRoutes);
router.use("/service", serviceRoutes);
router.use("/gallery", galleryRoutes);
router.use("/event", eventRoutes)

export default router;