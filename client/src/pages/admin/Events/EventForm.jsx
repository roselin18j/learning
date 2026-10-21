import { useState, useEffect } from "react";
import {
    createEvent,
    updateEvent,
} from "../../../services/events.service";

import toast from "react-hot-toast";
import RichTextEditor from "../Components/TextTools/RichTextEditor";

export default function EventForm({ event, onSuccess }) {

    const [preview, setPreview] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        shortDescription: "",
        description: "",
        eventDate: "",
        location: "",
        status: "Upcoming",
        image: null,
        homepageOrder: 1,
        showOnHomepage: true,
        isPublished: true,
    });

    useEffect(() => {

        if (event) {

            setFormData({
                title: event.title || "",
                slug: event.slug || "",
                shortDescription: event.shortDescription || "",
                description: event.description || "",
                eventDate: event.eventDate
                    ? event.eventDate.split("T")[0]
                    : "",
                location: event.location || "",
                status: event.status || "Upcoming",
                homepageOrder: event.homepageOrder || 1,
                showOnHomepage: event.showOnHomepage ?? true,
                isPublished: event.isPublished ?? true,
                image: null,
            });

            setPreview(event.image?.url || "");

        }

    }, [event]);

    // Generate Slug Automatically
    const createSlug = (text) => {

        return text
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");

    };

    // Handle Inputs
    const handleChange = (e) => {

        const {
            name,
            value,
            type,
            checked,
        } = e.target;

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
            [name]: type === "checkbox"
                ? checked
                : value,
        }));

    };

    // Handle Image
    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

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

    // Submit
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = new FormData();

            data.append("title", formData.title);
            data.append("slug", formData.slug);
            data.append("shortDescription", formData.shortDescription);
            data.append("description", formData.description);
            data.append("eventDate", formData.eventDate);
            data.append("location", formData.location);
            data.append("status", formData.status);
            data.append("homepageOrder", formData.homepageOrder);
            data.append("showOnHomepage", formData.showOnHomepage);
            data.append("isPublished", formData.isPublished);

            if (formData.image) {
                data.append("image", formData.image);
            }

            if (event) {

                await updateEvent(event._id, data);

                toast.success("Event updated successfully!");

            } else {

                await createEvent(data);

                toast.success("Event added successfully!");

            }

            setFormData({
                title: "",
                slug: "",
                shortDescription: "",
                description: "",
                eventDate: "",
                location: "",
                status: "Upcoming",
                image: null,
                homepageOrder: 1,
                showOnHomepage: true,
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
            className="space-y-8"
        >

            {/* Title */}

            <div>

                <label className="mb-2 block font-medium">
                    Event Title
                </label>

                <input
                    type="text"
                    name="title"
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-3 focus:border-maroon focus:outline-none"
                />

            </div>

            {/* Slug */}

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

            {/* Short Description */}

            <div>

                <label className="mb-2 block font-medium">
                    Short Description
                </label>

                <textarea
                    rows={4}
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    placeholder="Write a short description..."
                    className="w-full rounded-lg border p-3 focus:border-maroon focus:outline-none"
                />

            </div>

            {/* Description */}

            <div>

                <label className="mb-2 block font-medium">
                    Description
                </label>

                <RichTextEditor
                    value={formData.description}
                    onChange={(value) =>
                        setFormData((prev) => ({
                            ...prev,
                            description: value,
                        }))
                    }
                />

            </div>

            {/* Date & Location */}

            <div className="grid gap-6 md:grid-cols-2">

                <div>

                    <label className="mb-2 block font-medium">
                        Event Date
                    </label>

                    <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3 focus:border-maroon focus:outline-none"
                    />

                </div>

                <div>

                    <label className="mb-2 block font-medium">
                        Location
                    </label>

                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter event location"
                        className="w-full rounded-lg border p-3 focus:border-maroon focus:outline-none"
                    />

                </div>

            </div>

            {/* Status & Homepage Order */}

            <div className="grid gap-6 md:grid-cols-2">

                <div>

                    <label className="mb-2 block font-medium">
                        Event Status
                    </label>

                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3 focus:border-maroon focus:outline-none"
                    >
                        <option value="Upcoming">
                            Upcoming
                        </option>

                        <option value="Ongoing">
                            Ongoing
                        </option>

                        <option value="Completed">
                            Completed
                        </option>
                    </select>

                </div>

                <div>

                    <label className="mb-2 block font-medium">
                        Homepage Order
                    </label>

                    <input
                        type="number"
                        min="1"
                        name="homepageOrder"
                        value={formData.homepageOrder}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3 focus:border-maroon focus:outline-none"
                    />

                </div>

            </div>

            {/* Image */}

            <div>

                <label className="mb-2 block font-medium">
                    Event Image
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="w-full rounded-lg border p-2"
                />

            </div>

            {/* Preview */}

            {preview && (

                <div>

                    <img
                        src={preview}
                        alt="Preview"
                        className="h-72 w-full rounded-xl border object-cover"
                    />

                </div>

            )}

            {/* Options */}

            <div className="flex flex-wrap gap-8">

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

            {/* Submit */}

            <div>

                <button
                    type="submit"
                    className="rounded-lg bg-maroon px-8 py-3 font-semibold text-white transition hover:bg-darkmaroon"
                >
                    {event
                        ? "Update Event"
                        : "Save Event"}
                </button>

            </div>

        </form>

    );

}