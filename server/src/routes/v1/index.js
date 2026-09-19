import { Router } from "express";

import { homeRoutes } from "../../modules/home/index.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Home Routes
|--------------------------------------------------------------------------
*/

router.use("/home", homeRoutes);

export default router;