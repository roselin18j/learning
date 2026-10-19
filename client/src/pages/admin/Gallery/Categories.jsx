import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import GalleryService from "../../../services/gallery.service";

import CategoryTable from "./CategoryTable";
import CategoryForm from "./CategoryForm";

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {

        fetchCategories();

    }, []);

    const fetchCategories = async () => {

        try {

            setLoading(true);

            const response =
                await GalleryService.getCategories();

            setCategories(response.data.data);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load categories.");

        } finally {

            setLoading(false);

        }

    };

    const handleAdd = () => {

        setSelectedCategory(null);

        setShowModal(true);

    };

    const handleEdit = (category) => {

        setSelectedCategory(category);

        setShowModal(true);

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this category?")) return;

        try {

            const response =
                await GalleryService.deleteCategory(id);

            toast.success(response.data.message);

            fetchCategories();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Delete failed."
            );

        }

    };

    return (

        <div className="p-8 bg-gray-50 min-h-screen">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">
                        Gallery Categories
                    </h1>

                    <p className="text-gray-500">
                        Manage gallery categories.
                    </p>

                </div>

                <button
                    onClick={handleAdd}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
                >
                    + Add Category
                </button>

            </div>

            <CategoryTable
                categories={categories}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <CategoryForm
                show={showModal}
                onClose={() => {

                    setShowModal(false);

                    setSelectedCategory(null);

                }}
                fetchCategories={fetchCategories}
                category={selectedCategory}
            />

        </div>

    );

};

export default Categories;