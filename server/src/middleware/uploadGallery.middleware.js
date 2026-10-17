import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath = "uploads/gallery";

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadPath);
  },

  filename(req, file, cb) {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const imageTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
    "image/avif",
  ];

  const videoTypes = [
    "video/mp4",
    "video/webm",
    "video/ogg",
    "video/quicktime",
  ];

  if (
    imageTypes.includes(file.mimetype) ||
    videoTypes.includes(file.mimetype)
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only JPG, PNG, WEBP, AVIF, MP4, WEBM and MOV files are allowed."
      ),
      false
    );
  }
};

const uploadGallery = multer({
  storage,
  fileFilter,

  limits: {
    imageSize: 5 * 1024 * 1024,
    fileSize: 100 * 1024 * 1024,
  },
});

export default uploadGallery;