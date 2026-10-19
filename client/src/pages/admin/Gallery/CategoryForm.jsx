import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import GalleryService from "../../../services/gallery.service";

const CategoryForm = ({
    show,
    onClose,
    fetchCategories,
    category,
}) => {

    const initialState = {

        name: "",
        slug: "",
        description: "",
        order: 1,
        isActive: true,

    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {

        if (category) {

            setFormData({

                name: category.name,
                slug: category.slug,
                description: category.description,
                order: category.order,
                isActive: category.isActive,

            });

        } else {

            setFormData(initialState);

        }

    }, [category]);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        if (name === "name") {

            setFormData((prev) => ({

                ...prev,

                name: value,

                slug: value
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]/g, ""),

            }));

            return;

        }

        setFormData((prev) => ({

            ...prev,

            [name]: type === "checkbox"
                ? checked
                : value,

        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (category) {

                await GalleryService.updateCategory(
                    category._id,
                    formData
                );

                toast.success(
                    "Category updated successfully."
                );

            } else {

                await GalleryService.createCategory(
                    formData
                );

                toast.success(
                    "Category created successfully."
                );

            }

            fetchCategories();

            onClose();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Something went wrong."
            );

        }

    };

    if (!show) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">

                <div className="flex justify-between items-center border-b p-6">

                    <h2 className="text-2xl font-bold">

                        {category
                            ? "Edit Category"
                            : "Add Category"}

                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl"
                    >
                        ×
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="p-6 space-y-5">

                        <input
                            type="text"
                            name="name"
                            placeholder="Category Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            readOnly
                            className="w-full border rounded-lg p-3 bg-gray-100"
                        />

                        <textarea
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />

                        <input
                            type="number"
                            name="order"
                            min="1"
                            value={formData.order}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />

                        <label className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                            />

                            Active

                        </label>

                    </div>

                    <div className="flex justify-end gap-3 border-t p-6">

                        <button
                            type="button"
                            onClick={onClose}
                            className="border px-5 py-2 rounded-lg"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                        >
                            {category
                                ? "Update Category"
                                : "Save Category"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default CategoryForm;