import cors from "cors";
import { env } from "./env.js";

const corsOptions = {

    origin: env.CLIENT_URL,

    credentials: true,

};

export default cors(corsOptions);