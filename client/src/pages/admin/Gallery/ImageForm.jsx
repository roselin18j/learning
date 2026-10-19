import { useEffect, useState } from "react";

import GalleryService from "../../../services/gallery.service";

const ImageForm = ({
    show,
    onClose,
    image,
    fetchImages,
}) => {

    const initialState = {
        title: "",
        category: "",
        showOnHomepage: false,
        homepageOrder: 1,
        order: 1,
        isActive: true,
        image: null,
    };

    const [formData, setFormData] = useState(initialState);

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        if (show) {

            loadCategories();

        }

    }, [show]);

    useEffect(() => {

        if (image) {

            setFormData({
                title: image.title,
                category: image.category,
                showOnHomepage: image.showOnHomepage,
                homepageOrder: image.homepageOrder,
                order: image.order,
                isActive: image.isActive,
                image: null,
            });

        } else {

            setFormData(initialState);

        }

    }, [image]);

    const loadCategories = async () => {

        try {

            const response =
                await GalleryService.getCategories();

            setCategories(response.data.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));

    };

    const handleImage = (e) => {

        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0],
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = new FormData();

            data.append("title", formData.title);
            data.append("category", formData.category);
            data.append("showOnHomepage", formData.showOnHomepage);
            data.append("homepageOrder", formData.homepageOrder);
            data.append("order", formData.order);
            data.append("isActive", formData.isActive);

            if (formData.image) {

                data.append("image", formData.image);

            }

            if (image) {

                await GalleryService.updateImage(
                    image._id,
                    data
                );

            } else {

                await GalleryService.createImage(
                    data
                );

            }

            await fetchImages();

            onClose();

        } catch (error) {

            console.error(error);

        }

    };

    if (!show) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">

                <div className="px-6 py-5 border-b">

                    <h2 className="text-2xl font-bold">

                        {image
                            ? "Edit Image"
                            : "Add Image"}

                    </h2>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="p-6 space-y-5"
                >

                    <div>

                        <label className="block mb-2">
                            Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2"
                            required
                        />

                    </div>

                    <div>

                        <label className="block mb-2">
                            Category
                        </label>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2"
                            required
                        >

                            <option value="">
                                Select Category
                            </option>

                            {categories.map((category) => (

                                <option
                                    key={category._id}
                                    value={category.slug}
                                >

                                    {category.name}

                                </option>

                            ))}

                        </select>

                    </div>

                    <div>

                        <label className="block mb-2">
                            Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
                            className="w-full"
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div>

                            <label className="block mb-2">
                                Homepage Order
                            </label>

                            <input
                                type="number"
                                name="homepageOrder"
                                value={formData.homepageOrder}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2"
                            />

                        </div>

                        <div>

                            <label className="block mb-2">
                                Display Order
                            </label>

                            <input
                                type="number"
                                name="order"
                                value={formData.order}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2"
                            />

                        </div>

                    </div>

                    <div className="flex gap-8">

                        <label className="flex items-center gap-2">

                            <input
                                type="checkbox"
                                name="showOnHomepage"
                                checked={formData.showOnHomepage}
                                onChange={handleChange}
                            />

                            Show on Homepage

                        </label>

                        <label className="flex items-center gap-2">

                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                            />

                            Active

                        </label>

                    </div>

                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 border rounded-lg"
                        >

                            Cancel

                        </button>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                        >

                            {image
                                ? "Update Image"
                                : "Save Image"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default ImageForm;