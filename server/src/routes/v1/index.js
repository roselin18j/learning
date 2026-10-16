import { Router } from "express";

import { homeRoutes } from "../../modules/home/index.js";
import { serviceRoutes } from "../../modules/services/index.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Home Routes
|--------------------------------------------------------------------------
*/

router.use("/home", homeRoutes);
router.use("/service", serviceRoutes);

export default router;