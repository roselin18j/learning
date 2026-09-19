import { v2 as cloudinary } from "cloudinary";

import { env } from "./env.js";

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
});

console.log("Cloud Name:", env.CLOUDINARY_CLOUD_NAME);
console.log("API Key:", env.CLOUDINARY_API_KEY);
console.log(
  "API Secret:",
  env.CLOUDINARY_API_SECRET
    ? "Loaded ✅"
    : "Missing ❌"
);

export default cloudinary;