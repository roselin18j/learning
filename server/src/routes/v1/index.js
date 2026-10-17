import { Router } from "express";
import { homeRoutes } from "../../modules/home/index.js";
import { serviceRoutes } from "../../modules/services/index.js";
import galleryRoutes from "../../modules/gallery/index.js";

const router = Router();

router.use("/home", homeRoutes);
router.use("/service", serviceRoutes);
router.use("/gallery", galleryRoutes);

export default router;