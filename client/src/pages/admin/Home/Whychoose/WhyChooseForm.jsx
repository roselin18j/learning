import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { toast } from "react-toastify";

const initialState = {
    badge: "",
    title: "",
    description: "",
    stats: {
        number: "",
        title: "",
    },
    button: {
        text: "",
        link: "",
    },
    features: [
        {
            title: "",
            description: "",
        },
    ],
    isActive: true,
};

const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

const labelClass = "mb-2 block text-xs font-bold text-slate-900";

export default function WhyChooseForm({ whyChoose, updateWhyChoose, reload }) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    useEffect(() => {
        if (whyChoose) {
            setFormData({
                badge: whyChoose.badge || "",
                title: whyChoose.title || "",
                description: whyChoose.description || "",
                stats: {
                    number: whyChoose.stats?.number || "",
                    title: whyChoose.stats?.title || "",
                },
                button: {
                    text: whyChoose.button?.text || "",
                    link: whyChoose.button?.link || "",
                },
                features:
                    whyChoose.features?.length
                        ? whyChoose.features
                        : [
                            {
                                title: "",
                            },
                        ],
                isActive: whyChoose.isActive ?? true,
            });

            setPreview(whyChoose.image?.url || "");
        }
    }, [whyChoose]);

    // Release temporary blob URLs
    useEffect(() => {
        return () => {
            if (preview && preview.startsWith("blob:")) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleStatsChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            stats: { ...prev.stats, [name]: value },
        }));
    };

    const handleButtonChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            button: { ...prev.button, [name]: value },
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const addFeature = () => {

        if (formData.features.length >= 8) {
            toast.warning("Maximum 8 features allowed.");
            return;
        }

        setFormData((prev) => ({

            ...prev,

            features: [

                ...prev.features,

                {
                    title: "",
                },

            ],

        }));

    };

    const updateFeature = (index, value) => {

        const features = [...formData.features];

        features[index].title = value;

        setFormData({

            ...formData,

            features,

        });

    };

    const removeFeature = (index) => {

        const features =
            [...formData.features];

        features.splice(index, 1);

        setFormData({

            ...formData,

            features,

        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const submitData = new FormData();

            submitData.append("badge", formData.badge);
            submitData.append("title", formData.title);
            submitData.append("description", formData.description);
            submitData.append("stats", JSON.stringify(formData.stats));
            submitData.append("button", JSON.stringify(formData.button));
            submitData.append(
                "features",
                JSON.stringify(
                    formData.features.filter(
                        (item) => item.title.trim() !== ""
                    )
                )
            );
            submitData.append("isActive", formData.isActive);

            if (image) {
                submitData.append("image", image);
            }

            await updateWhyChoose(submitData);

            toast.success("Why Choose section updated successfully.");
            setImage(null);
            reload();
        } catch (err) {
            console.log(err.response?.data.errors);
            toast.error(err?.response?.data?.message || "Update failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
            <div className="border-b border-slate-200 px-5 py-4">
                <h2 className="text-sm font-bold text-slate-800">
                    Why Choose Settings
                </h2>
            </div>

            <div className="space-y-6 p-5">
                {/* Badge */}
                <div>
                    <label className={labelClass}>Badge</label>
                    <input
                        type="text"
                        name="badge"
                        value={formData.badge}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Title */}
                <div>
                    <label className={labelClass}>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Description */}
                <div>
                    <label className={labelClass}>Description</label>
                    <textarea
                        rows="5"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Image */}
                <div>
                    <label className={labelClass}>Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className={inputClass}
                    />

                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="mt-4 h-48 rounded-lg border border-slate-200 object-cover"
                        />
                    )}
                </div>

                {/* Stats */}
                {/* Stats */}

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className={labelClass}>Stats Number</label>

                        <input
                            type="text"
                            name="number"
                            value={formData.stats.number}
                            onChange={handleStatsChange}
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className={labelClass}>Stats Title</label>

                        <input
                            type="text"
                            name="title"
                            value={formData.stats.title}
                            onChange={handleStatsChange}
                            className={inputClass}
                        />
                    </div>
                </div>



                {/* Features */}

                <div>

                    <div className="mb-3 flex items-center justify-between">

                        <label className="text-xs font-bold text-slate-900">
                            Features (Maximum 8)
                        </label>

                        <button
                            type="button"
                            onClick={addFeature}
                            disabled={formData.features.length >= 8}
                            className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            + Add Feature
                        </button>

                    </div>

                    <div className="space-y-3">

                        {formData.features.map((feature, index) => (

                            <div
                                key={index}
                                className="flex items-center gap-3"
                            >

                                <input
                                    type="text"
                                    placeholder={`Feature ${index + 1}`}
                                    value={feature.title}
                                    onChange={(e) =>
                                        updateFeature(
                                            index,
                                            e.target.value
                                        )
                                    }
                                    className={`flex-1 ${inputClass}`}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        removeFeature(index)
                                    }
                                    className="rounded-lg bg-red-500 px-4 py-3 text-white"
                                >
                                    Delete
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Active */}
                <label
                    htmlFor="isActive"
                    className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-900 bg-white px-4 py-3.5"
                >
                    <div>
                        <p className="text-sm font-bold text-slate-800">
                            Active Section
                        </p>
                        <p className="text-xs text-slate-500">
                            Enable or disable the Why Choose section.
                        </p>
                    </div>

                    <input
                        id="isActive"
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleChange}
                        className="h-4 w-4 shrink-0 cursor-pointer accent-blue-600"
                    />
                </label>

                {/* Save */}
                <div className="flex justify-end mt-8">
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-lg bg-[#6B1246] px-8 py-3 text-white"
                    >
                        <Save size={18} />
                        {loading ? "Saving..." : "Save"}
                    </button>
                </div>
            </div>
        </form>
    );
}