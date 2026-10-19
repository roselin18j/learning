import { useEffect, useState } from "react";

import GalleryService from "../../../services/gallery.service";

import ImageForm from "./ImageForm";
import ImageTable from "./ImageTable";

const Images = () => {

    const [images, setImages] = useState([]);

    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {

        fetchImages();

    }, []);

    const fetchImages = async () => {

        try {

            setLoading(true);

            const response =
                await GalleryService.getImages();

            setImages(response.data.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const handleEdit = (image) => {

        setSelectedImage(image);

        setShowModal(true);

    };

    const handleDelete = async (imageId) => {
        if (!window.confirm("Delete this image?")) return;

        try {
            const response = await GalleryService.deleteImage(imageId);

            alert(response.data.message);

            await fetchImages();
        } catch (error) {
            console.error(error);

            alert(
                error?.response?.data?.message ||
                "Delete failed."
            );
        }
    };

    return (

        <div className="mt-10">

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h2 className="text-2xl font-bold">
                        Gallery Images
                    </h2>

                    <p className="text-gray-500">
                        Manage gallery images.
                    </p>

                </div>

                <button
                    onClick={() => {

                        setSelectedImage(null);

                        setShowModal(true);

                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                >
                    + Add Image
                </button>

            </div>

            <ImageTable
                images={images}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <ImageForm
                show={showModal}
                onClose={() => setShowModal(false)}
                image={selectedImage}
                fetchImages={fetchImages}
            />

        </div>

    );

};

export default Images;