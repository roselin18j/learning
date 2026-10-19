import api from "./api";

/*
|--------------------------------------------------------------------------
| Gallery Service
|--------------------------------------------------------------------------
*/

class GalleryService {

    /*
    |--------------------------------------------------------------------------
    | Categories
    |--------------------------------------------------------------------------
    */

    getCategories() {
        return api.get("/gallery/categories");
    }

    createCategory(data) {
        return api.post("/gallery/categories", data);
    }

    updateCategory(categoryId, data) {
        return api.put(`/gallery/categories/${categoryId}`, data);
    }

    deleteCategory(categoryId) {
        return api.delete(`/gallery/categories/${categoryId}`);
    }

    /*
    |--------------------------------------------------------------------------
    | Images
    |--------------------------------------------------------------------------
    */

    getImages() {
        return api.get("/gallery/images");
    }

    createImage(formData) {
        return api.post("/gallery/images", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    updateImage(imageId, formData) {
        return api.put(`/gallery/images/${imageId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    deleteImage(imageId) {
        return api.delete(`/gallery/images/${imageId}`);
    }

    /*
    |--------------------------------------------------------------------------
    | Videos
    |--------------------------------------------------------------------------
    */

    getVideos() {
        return api.get("/gallery/videos");
    }

    createVideo(formData) {
        return api.post(
            "/gallery/videos",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    }
    updateVideo(id, formData) {
    return api.put(
        `/gallery/videos/${id}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
}

    deleteVideo(videoId) {
        return api.delete(`/gallery/videos/${videoId}`);
    }

}

export default new GalleryService();