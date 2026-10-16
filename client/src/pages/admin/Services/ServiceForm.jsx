import { useState, useEffect } from "react";
import {
    createService,
    updateService,
} from "../../../services/services.service";


export default function ServiceForm({ service, onSuccess }) {

    const [preview, setPreview] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        shortDescription: "",
        description: "",
        image: null,
        homepageOrder: 1,
        showOnHomepage: false,
        isPublished: true,
    });

    useEffect(() => {
        if (service) {
            setFormData({
                title: service.title,
                slug: service.slug,
                shortDescription: service.shortDescription,
                description: service.description,
                homepageOrder: service.homepageOrder,
                showOnHomepage: service.showOnHomepage,
                isPublished: service.isPublished,
                image: null,
            });

            setPreview(service.image?.url || "");
        }
    }, [service]);

    // Create slug automatically
    const createSlug = (text) => {
        return text
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
    };

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        // Auto generate slug
        if (name === "title") {

            setFormData((prev) => ({
                ...prev,
                title: value,
                slug: createSlug(value),
            }));

            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        // Allow only images
        if (!file.type.startsWith("image/")) {
            toast.error("Please select a valid image.");
            return;
        }

        setFormData((prev) => ({
            ...prev,
            image: file,
        }));

        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = new FormData();

            data.append("title", formData.title);
            data.append("slug", formData.slug);
            data.append("shortDescription", formData.shortDescription);
            data.append("description", formData.description);
            data.append("homepageOrder", formData.homepageOrder);
            data.append("showOnHomepage", formData.showOnHomepage);
            data.append("isPublished", formData.isPublished);

            // Upload image only if user selected a new one
            if (formData.image) {
                data.append("image", formData.image);
            }

            if (service) {

                const response = await updateService(service._id, data);

                console.log(response.data);

                toast.success("Service updated successfully!");

            } else {

                const response = await createService(data);

                console.log(response.data);

                toast.success("Service added successfully!");

            }

            // Reset form after success
            setFormData({
                title: "",
                slug: "",
                shortDescription: "",
                description: "",
                image: null,
                homepageOrder: 1,
                showOnHomepage: false,
                isPublished: true,
            });

            setPreview("");

            onSuccess?.();

        } catch (error) {

            console.error(error);

            if (error.response?.data?.errors?.length) {

                error.response.data.errors.forEach((err) =>
                    toast.error(err.msg)
                );

            } else {

                toast.error(
                    error.response?.data?.message ||
                    "Something went wrong."
                );

            }

        }

    };

    return (

        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-6"
        >

            <div>

                <label className="mb-2 block font-medium">
                    Service Title
                </label>

                <input
                    type="text"
                    name="title"
                    placeholder="Enter service title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-3"
                />

            </div>

            <div>

                <label className="mb-2 block font-medium">
                    Slug
                </label>

                <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    readOnly
                    className="w-full rounded-lg border bg-gray-100 p-3"
                />

            </div>

            <div>

                <label className="mb-2 block font-medium">
                    Short Description
                </label>

                <textarea
                    name="shortDescription"
                    placeholder="Short description"
                    rows={3}
                    value={formData.shortDescription}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-3"
                />

            </div>

            <div>

                <label className="mb-2 block font-medium">
                    Description
                </label>

                 <textarea
                    name="Description"
                    placeholder=" description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-3"
                />

            </div>

            <div>

                <label className="mb-2 block font-medium">
                    Homepage Order
                </label>

                <input
                    type="number"
                    name="homepageOrder"
                    value={formData.homepageOrder}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-3"
                />

            </div>

            <div>

                <label className="mb-2 block font-medium">
                    Service Image
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="w-full"
                />

            </div>

            {preview && (

                <div>

                    <img
                        src={preview}
                        alt="Preview"
                        className="h-48 w-full rounded-lg border object-cover"
                    />

                </div>

            )}

            <div className="flex gap-8">

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        name="showOnHomepage"
                        checked={formData.showOnHomepage}
                        onChange={handleChange}
                    />

                    Show On Homepage

                </label>

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        name="isPublished"
                        checked={formData.isPublished}
                        onChange={handleChange}
                    />

                    Published

                </label>

            </div>

            <button
                type="submit"
                className="rounded-lg bg-maroon px-6 py-3 font-semibold text-white hover:bg-darkmaroon"
            >
                {service ? "Update Service" : "Save Service"}
            </button>

        </form>
    );
}