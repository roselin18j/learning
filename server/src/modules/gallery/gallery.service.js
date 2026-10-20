import GalleryPage from "./gallery.model.js";
import ApiError from "../../utils/ApiError.js";
import uploadImage from "../../utils/uploadImage.js";
import uploadVideo from "../../utils/uploadVideo.js";
import removeImageFromCloudinary from "../../utils/deleteImage.js";
import removeVideoFromCloudinary from "../../utils/deleteVideo.js";

class GalleryService {

    /**
 * Get Categories
 */
    async getCategories() {

        const gallery = await this.findGallery();

        return gallery.gallerySection.categories.sort(
            (a, b) => (a.order || 1) - (b.order || 1)
        );

    }

    /**
  * Create Category
  */
    async createCategory(data) {

        const gallery = await this.findGallery();

        // Check duplicate slug
        const slugExists =
            gallery.gallerySection.categories.some(
                (category) =>
                    category.slug.toLowerCase() ===
                    data.slug.toLowerCase()
            );

        if (slugExists) {
            throw new ApiError(
                400,
                "Category slug already exists."
            );
        }

        // Create category
        gallery.gallerySection.categories.push({
            name: data.name,
            slug: data.slug.toLowerCase(),
            order: Number(data.order) || 1,
            isActive: data.isActive ?? true,
        });

        // Sort by order
        gallery.gallerySection.categories.sort(
            (a, b) => (a.order || 1) - (b.order || 1)
        );

        await gallery.save();

        return gallery.gallerySection.categories;

    }

    /**
 * Update Category
 */
    async updateCategory(categoryId, data) {

        const gallery = await this.findGallery();

        const category =
            gallery.gallerySection.categories.id(categoryId);

        if (!category) {
            throw new ApiError(
                404,
                "Category not found."
            );
        }

        // Prevent duplicate slug (case-insensitive)
        if (
            data.slug &&
            gallery.gallerySection.categories.some(
                (item) =>
                    item.slug.toLowerCase() ===
                    data.slug.toLowerCase() &&
                    item._id.toString() !== categoryId
            )
        ) {
            throw new ApiError(
                400,
                "Category slug already exists."
            );
        }

        // Update fields
        category.name =
            data.name ?? category.name;

        category.slug =
            data.slug
                ? data.slug.toLowerCase()
                : category.slug;

        category.order =
            data.order !== undefined
                ? Number(data.order)
                : category.order;

        if (data.isActive !== undefined) {
            category.isActive = data.isActive;
        }

        // Sort categories
        gallery.gallerySection.categories.sort(
            (a, b) => (a.order || 1) - (b.order || 1)
        );

        await gallery.save();

        return category;

    }

    /**
     * Delete Category
     */
    async deleteCategory(categoryId) {

        const gallery = await this.findGallery();

        const category =
            gallery.gallerySection.categories.id(categoryId);

        if (!category) {
            throw new ApiError(404, "Category not found.");
        }

        // Prevent deleting category if images exist
        const imageExists =
            gallery.gallerySection.images.some(
                (image) => image.category === category.slug
            );

        if (imageExists) {
            throw new ApiError(
                400,
                "Delete all images in this category first."
            );
        }

        category.deleteOne();

        await gallery.save();

        return {
            message: "Category deleted successfully.",
        };

    }

    /**
     * Find Gallery Document
     */
    async findGallery() {

        const gallery = await GalleryPage.findOne();

        if (!gallery) {
            throw new ApiError(404, "Gallery data not found.");
        }

        return gallery;

    }

    /**
     * Create Gallery (Only Once)
     */
    async createGallery() {

        const exists = await GalleryPage.findOne();

        if (exists) {
            throw new ApiError(
                400,
                "Gallery document already exists."
            );
        }

        return await GalleryPage.create({
            gallerySection: {
                categories: [],
                images: [],
                videos: [],
            },
        });

    }

    /**
     * Get Gallery Section
     */
    async getGallery() {

        const gallery = await this.findGallery();

        return gallery.gallerySection;

    }

    /**
   * Get Images
   */
    async getImages() {

        const gallery = await this.findGallery();

        return gallery.gallerySection.images
            .filter(image => image.isActive)
            .sort(
                (a, b) => (a.order || 1) - (b.order || 1)
            );

    }

    /**
     * Create Image
     */
    async createImage(data, file) {

        const gallery = await this.findGallery();

        if (!file) {
            throw new ApiError(400, "Image is required.");
        }

        const categoryExists =
            gallery.gallerySection.categories.some(
                (category) =>
                    category.slug.toLowerCase() ===
                    data.category.toLowerCase()
            );

        if (!categoryExists) {
            throw new ApiError(
                404,
                "Category not found."
            );
        }

        const uploadedImage = await uploadImage(
            file.path,
            "gallery/images"
        );

        gallery.gallerySection.images.push({
            title: data.title,
            category: data.category,
            description: data.description || "",
            showOnHomepage: data.showOnHomepage ?? false,
            homepageOrder: Number(data.homepageOrder) || 1,
            order: Number(data.order) || 1,
            isActive: data.isActive ?? true,
            image: {
                url: uploadedImage.url,
                publicId: uploadedImage.publicId,
                alt: data.alt || data.title,
            },
        });

        gallery.gallerySection.images.sort(
            (a, b) => (a.order || 1) - (b.order || 1)
        );

        await gallery.save();

        return gallery.gallerySection.images;
    }

    /**
     * Update Image
     */
    async updateImage(imageId, data, file) {

        const gallery = await this.findGallery();

        const image =
            gallery.gallerySection.images.id(imageId);

        if (!image) {
            throw new ApiError(404, "Image not found.");
        }

        // Replace image only if a new file is uploaded
        if (file) {

            if (image.image?.publicId) {
                await removeImageFromCloudinary(
                    image.image.publicId
                );
            }

            const uploadedImage = await uploadImage(
                file.path,
                "gallery/images"
            );

            image.image = {
                url: uploadedImage.url,
                publicId: uploadedImage.publicId,
                alt: data.alt || data.title,
            };

        }

        image.title =
            data.title ?? image.title;

        if (data.category) {

            const categoryExists =
                gallery.gallerySection.categories.some(
                    (category) =>
                        category.slug.toLowerCase() ===
                        data.category.toLowerCase()
                );

            if (!categoryExists) {
                throw new ApiError(
                    404,
                    "Category not found."
                );
            }

            image.category = data.category;
        }

        image.description =
            data.description ?? image.description;

        if (data.showOnHomepage !== undefined) {
            image.showOnHomepage = data.showOnHomepage;
        }

        if (data.homepageOrder !== undefined) {
            image.homepageOrder = Number(data.homepageOrder);
        }

        if (data.order !== undefined) {
            image.order = Number(data.order);
        }

        if (data.isActive !== undefined) {
            image.isActive = data.isActive;
        }

        gallery.gallerySection.images.sort(
            (a, b) => (a.order || 1) - (b.order || 1)
        );

        await gallery.save();

        return image;

    }

    async deleteImage(imageId) {

        const gallery = await this.findGallery();

        const image =
            gallery.gallerySection.images.id(imageId);

        if (!image) {
            throw new ApiError(404, "Image not found.");
        }

        if (image.image?.publicId) {
            await removeImageFromCloudinary(image.image.publicId);
        }

        image.deleteOne();

        await gallery.save();

        return {
            message: "Image deleted successfully.",
        };

    }

    /**
 * Get Videos
 */
    async getVideos() {

        const gallery = await this.findGallery();

        return gallery.gallerySection.videos
            .filter(video => video.isActive)
            .sort(
                (a, b) => (a.order || 1) - (b.order || 1)
            );

    }

    /**
 * Create Video
 */
    async createVideo(data, file) {

        const gallery = await this.findGallery();

        if (!file) {
            throw new ApiError(400, "Video is required.");
        }

        const uploadedVideo = await uploadVideo(
            file.path,
            "gallery/videos"
        );

        gallery.gallerySection.videos.push({
            title: data.title,
            showOnHomepage: data.showOnHomepage === "true" || data.showOnHomepage === true,
            homepageOrder: Number(data.homepageOrder) || 1,
            order: Number(data.order) || 1,
            isActive: data.isActive === "true" || data.isActive === true,
            video: {
                url: uploadedVideo.url,
                publicId: uploadedVideo.publicId,
            },
        });

        gallery.gallerySection.videos.sort(
            (a, b) => (a.order || 1) - (b.order || 1)
        );

        await gallery.save();

        return gallery.gallerySection.videos;

    }

    /**
 * Update Video
 */
    async updateVideo(videoId, data, file) {

        const gallery = await this.findGallery();

        const video =
            gallery.gallerySection.videos.id(videoId);

        if (!video) {
            throw new ApiError(404, "Video not found.");
        }

        if (file) {

            if (video.video?.publicId) {
                await removeVideoFromCloudinary(
                    video.video.publicId
                );
            }

            const uploadedVideo = await uploadVideo(
                file.path,
                "gallery/videos"
            );

            video.video = {
                url: uploadedVideo.url,
                publicId: uploadedVideo.publicId,
            };
        }

        video.title = data.title ?? video.title;

        if (data.showOnHomepage !== undefined) {
            video.showOnHomepage = data.showOnHomepage;
        }

        if (data.homepageOrder !== undefined) {
            video.homepageOrder = Number(data.homepageOrder);
        }

        if (data.order !== undefined) {
            video.order = Number(data.order);
        }

        if (data.isActive !== undefined) {
            video.isActive = data.isActive;
        }

        gallery.gallerySection.videos.sort(
            (a, b) => (a.order || 1) - (b.order || 1)
        );

        await gallery.save();

        return video;
    }

    /**
     * Delete Video
     */
    async deleteVideo(videoId) {

        const gallery = await this.findGallery();

        const video =
            gallery.gallerySection.videos.id(videoId);

        if (!video) {
            throw new ApiError(
                404,
                "Video not found."
            );
        }

        if (video.video?.publicId) {
            await removeVideoFromCloudinary(
                video.video.publicId
            );
        }

        video.deleteOne();

        await gallery.save();

        return {
            message: "Video deleted successfully.",
        };

    }

    /**
 * Get Homepage Images
 */
    async getHomepageImages() {

        const gallery = await this.findGallery();

        return gallery.gallerySection.images
            .filter(image =>
                image.isActive &&
                image.showOnHomepage
            )
            .sort(
                (a, b) =>
                    (a.homepageOrder || 1) -
                    (b.homepageOrder || 1)
            );

    }
    /**
     * Get Homepage Videos
     */
    async getHomepageVideos() {

        const gallery = await this.findGallery();

        return gallery.gallerySection.videos
            .filter(video =>
                video.isActive &&
                video.showOnHomepage
            )
            .sort(
                (a, b) =>
                    (a.homepageOrder || 1) -
                    (b.homepageOrder || 1)
            );

    }

}

export default new GalleryService();