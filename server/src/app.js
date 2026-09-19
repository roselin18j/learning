import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import hpp from "hpp";
// import mongoSanitize from "express-mongo-sanitize";
// import xss from "xss-clean";
import morgan from "morgan";

import routes from "./routes/index.js";

const app = express();

/*
|--------------------------------------------------------------------------
| Middlewares
|--------------------------------------------------------------------------
*/

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(hpp());

// app.use(mongoSanitize());

// app.use(xss());

app.use(morgan("dev"));

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

app.use("/api", routes);

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "NGO Management API Running Successfully 🚀",
  });
});

export default app;