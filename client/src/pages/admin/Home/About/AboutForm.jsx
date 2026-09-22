import { useEffect, useState } from "react";
import {
    Image as ImageIcon,
    Save,
    Upload,
} from "lucide-react";

import { updateAbout } from "../../../../services/home.service";

const defaultFeatures = [
    {
        title: "",
        description: "",
    },
    {
        title: "",
        description: "",
    },
    {
        title: "",
        description: "",
    },
    {
        title: "",
        description: "",
    },
];

const defaultForm = {
    badge: "",
    title: "",
    description: "",

    features: defaultFeatures,

    imageAlt: "",

    isActive: true,
};

export default function AboutForm({
    about,
    reload,
}) {

    const [loading, setLoading] = useState(false);

    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState("");

    const [formData, setFormData] =
        useState(defaultForm);

    useEffect(() => {

        if (!about) return;

        setFormData({

            badge:
                about.badge || "",

            title:
                about.title || "",

            description:
                about.description || "",

            features:
                about.features?.length
                    ? about.features
                    : defaultFeatures,

            imageAlt:
                about.image?.alt || "",

            isActive:
                about.isActive,

        });

        setPreview(
            about.image?.url || ""
        );

    }, [about]);

    const handleChange = (e) => {

        const {
            name,
            value,
            checked,
            type,
        } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));

    };

    const handleFeatureChange = (
        index,
        field,
        value
    ) => {

        const updatedFeatures = [
            ...formData.features,
        ];

        updatedFeatures[index][field] =
            value;

        setFormData((prev) => ({
            ...prev,
            features:
                updatedFeatures,
        }));

    };

    const handleImage = (e) => {

        const file =
            e.target.files[0];

        if (!file) return;

        setImage(file);

        setPreview(
            URL.createObjectURL(file)
        );

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const data =
                new FormData();

            data.append(
                "badge",
                formData.badge
            );

            data.append(
                "title",
                formData.title
            );

            data.append(
                "description",
                formData.description
            );

            data.append(
                "features",
                JSON.stringify(
                    formData.features
                )
            );

            data.append(
                "imageAlt",
                formData.imageAlt
            );

            data.append(
                "isActive",
                formData.isActive
            );

            if (image) {

                data.append(
                    "image",
                    image
                );

            }

            await updateAbout(data);

            alert(
                "About Section Updated Successfully"
            );

            reload();

        } catch (err) {

            console.log(err);

            alert(
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">

            <form
                onSubmit={handleSubmit}
                className="p-8 space-y-10"
            >

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* LEFT */}

                    <div>

                        <label className="block font-semibold mb-4">
                            About Image
                        </label>

                        <label
                            className="
border-2
border-dashed
border-slate-300
rounded-3xl
h-[420px]
cursor-pointer
overflow-hidden
flex
items-center
justify-center
hover:border-[#6B1246]
transition
"
                        >

                            {preview ? (

                                <img
                                    src={preview}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                            ) : (

                                <div className="text-center">

                                    <ImageIcon
                                        size={55}
                                        className="mx-auto text-slate-400"
                                    />

                                    <p className="mt-4 font-medium">

                                        Upload About Image

                                    </p>

                                    <p className="text-sm text-slate-400 mt-2">

                                        PNG / JPG

                                    </p>

                                </div>

                            )}

                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImage}
                            />

                        </label>

                    </div>

                    {/* RIGHT */}

                    <div className="lg:col-span-2 space-y-6">

                        <div>

                            <label className="block font-medium mb-2">

                                Badge

                            </label>

                            <input
                                type="text"
                                name="badge"
                                value={formData.badge}
                                onChange={handleChange}
                                className="w-full border rounded-xl px-4 py-3"
                            />

                        </div>

                        <div>

                            <label className="block font-medium mb-2">

                                Title

                            </label>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full border rounded-xl px-4 py-3"
                            />

                        </div>

                        <div>

                            <label className="block font-medium mb-2">

                                Description

                            </label>

                            <textarea
                                rows="6"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border rounded-xl px-4 py-3 resize-none"
                            />

                        </div>

                    </div>

                </div>

                <hr className="my-10" />

                <h3 className="text-2xl font-bold">

                    About Features

                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                    {formData.features.map((feature, index) => (

                        <div
                            key={index}
                            className="border rounded-2xl p-6 bg-slate-50"
                        >

                            <h4 className="font-semibold text-lg mb-5">

                                Feature {index + 1}

                            </h4>

                            <div className="space-y-5">

                                <div>

                                    <label className="block font-medium mb-2">

                                        Title

                                    </label>

                                    <input
                                        type="text"
                                        value={feature.title}
                                        onChange={(e) =>
                                            handleFeatureChange(
                                                index,
                                                "title",
                                                e.target.value
                                            )
                                        }
                                        className="w-full border rounded-xl px-4 py-3"
                                    />

                                </div>

                                <div>

                                    <label className="block font-medium mb-2">

                                        Description

                                    </label>

                                    <textarea
                                        rows="4"
                                        value={feature.description}
                                        onChange={(e) =>
                                            handleFeatureChange(
                                                index,
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        className="w-full border rounded-xl px-4 py-3 resize-none"
                                    />

                                </div>

                            </div>

                        </div>

                    ))}
                </div>

                <hr className="my-10" />

                <div className="grid lg:grid-cols-2 gap-6">

                    <div>

                        <label className="block font-medium mb-2">

                            Image Alt Text

                        </label>

                        <input
                            type="text"
                            name="imageAlt"
                            value={formData.imageAlt}
                            onChange={handleChange}
                            className="w-full border rounded-xl px-4 py-3"
                        />

                    </div>

                    <div className="flex items-end">

                        <label className="flex items-center gap-3 cursor-pointer">

                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                                className="w-5 h-5"
                            />

                            <span className="font-medium">

                                Active About Section

                            </span>

                        </label>

                    </div>

                </div>
                <div className="border-t pt-8 flex justify-end">

                    <button
                        type="submit"
                        disabled={loading}
                        className="
            inline-flex
            items-center
            gap-3
            bg-[#6B1246]
            hover:bg-[#55103A]
            text-white
            px-8
            py-3
            rounded-xl
            font-semibold
            transition
            disabled:opacity-50
        "
                    >

                        <Save size={18} />

                        {loading
                            ? "Saving..."
                            : "Save About Section"}

                    </button>

                </div>

            </form>

        </div>

    );
}