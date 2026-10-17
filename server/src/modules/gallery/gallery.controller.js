import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import GalleryService from "./gallery.service.js";

class GalleryController {

    /**
     * Create Gallery
     */
    createGallery = asyncHandler(async (req, res) => {

        const gallery = await GalleryService.createGallery();

        return res.status(201).json(
            new ApiResponse(
                201,
                "Gallery created successfully.",
                gallery
            )
        );

    });

    /**
     * Get Gallery
     */
    getGallery = asyncHandler(async (req, res) => {

        const gallery = await GalleryService.getGallery();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Gallery fetched successfully.",
                gallery
            )
        );

    });

    /**
     * Get Categories
     */
    getCategories = asyncHandler(async (req, res) => {

        const categories =
            await GalleryService.getCategories();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Categories fetched successfully.",
                categories
            )
        );

    });

    /**
     * Create Category
     */
    createCategory = asyncHandler(async (req, res) => {

        const categories =
            await GalleryService.createCategory(req.body);

        return res.status(201).json(
            new ApiResponse(
                201,
                "Category created successfully.",
                categories
            )
        );

    });

    /**
     * Update Category
     */
    updateCategory = asyncHandler(async (req, res) => {

        const category =
            await GalleryService.updateCategory(
                req.params.categoryId,
                req.body
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Category updated successfully.",
                category
            )
        );

    });

    /**
     * Delete Category
     */
    deleteCategory = asyncHandler(async (req, res) => {

        const result =
            await GalleryService.deleteCategory(
                req.params.categoryId
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                result.message
            )
        );

    });

    /**
     * Get Images
     */
    getImages = asyncHandler(async (req, res) => {

        const images =
            await GalleryService.getImages();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Images fetched successfully.",
                images
            )
        );

    });

    /**
     * Create Image
     */
    createImage = asyncHandler(async (req, res) => {

        const images =
            await GalleryService.createImage(
                req.body,
                req.file
            );

        return res.status(201).json(
            new ApiResponse(
                201,
                "Image created successfully.",
                images
            )
        );

    });

    /**
     * Update Image
     */
    updateImage = asyncHandler(async (req, res) => {

        const image =
            await GalleryService.updateImage(
                req.params.imageId,
                req.body,
                req.file
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Image updated successfully.",
                image
            )
        );

    });

    /**
     * Delete Image
     */
    deleteImage = asyncHandler(async (req, res) => {

        const result =
            await GalleryService.deleteImage(
                req.params.imageId
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                result.message
            )
        );

    });

    /**
 * Get Videos
 */
    getVideos = asyncHandler(async (req, res) => {

        const videos =
            await GalleryService.getVideos();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Videos fetched successfully.",
                videos
            )
        );

    });

    /**
 * Create Video
 */
    createVideo = asyncHandler(async (req, res) => {

        const videos =
            await GalleryService.createVideo(
                req.body,
                req.file
            );

        return res.status(201).json(
            new ApiResponse(
                201,
                "Video created successfully.",
                videos
            )
        );

    });

    /**
 * Update Video
 */
    updateVideo = asyncHandler(async (req, res) => {

        const video =
            await GalleryService.updateVideo(
                req.params.videoId,
                req.body,
                req.file
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Video updated successfully.",
                video
            )
        );

    });

    /**
 * Delete Video
 */
    deleteVideo = asyncHandler(async (req, res) => {

        const result =
            await GalleryService.deleteVideo(
                req.params.videoId
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                result.message
            )
        );

    });

}

export default new GalleryController();