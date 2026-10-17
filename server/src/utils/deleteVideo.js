import cloudinary from "../config/cloudinary.js";

const deleteVideo = async (publicId) => {

  if (!publicId) return;

  await cloudinary.uploader.destroy(publicId, {
    resource_type: "video",
  });

};

export default deleteVideo;