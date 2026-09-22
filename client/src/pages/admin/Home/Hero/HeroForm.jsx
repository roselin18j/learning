import { useState } from "react";
import { createHeroSlide } from "../../../../services/home.service";

const HeroForm = ({ reload }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (hero) {

            setFormData({
                badge: hero.badge || "",
                title: hero.title || "",
                subtitle: hero.subtitle || "",
                description: hero.description || "",
                primaryButtonText: hero.primaryButtonText || "",
                primaryButtonLink: hero.primaryButtonLink || "",
                secondaryButtonText: hero.secondaryButtonText || "",
                secondaryButtonLink: hero.secondaryButtonLink || "",
                imageAlt: hero.imageAlt || "",
                overlayOpacity: hero.overlayOpacity || 0.5,
                order: hero.order || 1,
                isActive: hero.isActive,
            });

        } else {

            setFormData({
                badge: "",
                title: "",
                subtitle: "",
                description: "",
                primaryButtonText: "",
                primaryButtonLink: "",
                secondaryButtonText: "",
                secondaryButtonLink: "",
                imageAlt: "",
                overlayOpacity: 0.5,
                order: 1,
                isActive: true,
            });

        }

    }, [hero]);

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const data = new FormData();

            data.append("badge", formData.badge);
            data.append("title", formData.title);
            data.append("subtitle", formData.subtitle);
            data.append("description", formData.description);

            data.append("primaryButtonText", formData.primaryButtonText);
            data.append("primaryButtonLink", formData.primaryButtonLink);

            data.append("secondaryButtonText", formData.secondaryButtonText);
            data.append("secondaryButtonLink", formData.secondaryButtonLink);

            data.append("imageAlt", formData.imageAlt);
            data.append("overlayOpacity", formData.overlayOpacity);
            data.append("order", formData.order);
            data.append("isActive", formData.isActive);

            if (image) {
                data.append("image", image);
            }

            if (hero) {

                await updateHeroSlide(hero._id, data);

            } else {

                await createHeroSlide(data);

            }

            alert("Hero Slide Added Successfully");

            setFormData({
                badge: "",
                title: "",
                subtitle: "",
                description: "",

                primaryButtonText: "",
                primaryButtonLink: "",

                secondaryButtonText: "",
                secondaryButtonLink: "",

                imageAlt: "",
                overlayOpacity: 0.5,
                order: 1,
                isActive: true,
            });

            setImage(null);

            reload();

        } catch (err) {
            console.log(err);
            alert("Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border p-6">

            <h4 className="text-xl font-semibold mb-6">
                Add Hero Slide
            </h4>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            >

                <div>
                    <label className="block text-sm font-medium mb-2">
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
                    <label className="block text-sm font-medium mb-2">
                        Order
                    </label>

                    <input
                        type="number"
                        name="order"
                        value={formData.order}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div className="lg:col-span-2">
                    <label className="block text-sm font-medium mb-2">
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

                <div className="lg:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                        Subtitle
                    </label>

                    <input
                        type="text"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div className="lg:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                        Description
                    </label>

                    <textarea
                        rows="5"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Primary Button Text
                    </label>

                    <input
                        type="text"
                        name="primaryButtonText"
                        value={formData.primaryButtonText}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Primary Button Link
                    </label>

                    <input
                        type="text"
                        name="primaryButtonLink"
                        value={formData.primaryButtonLink}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Secondary Button Text
                    </label>

                    <input
                        type="text"
                        name="secondaryButtonText"
                        value={formData.secondaryButtonText}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Secondary Button Link
                    </label>

                    <input
                        type="text"
                        name="secondaryButtonLink"
                        value={formData.secondaryButtonLink}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Image Alt
                    </label>

                    <input
                        type="text"
                        name="imageAlt"
                        value={formData.imageAlt}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Overlay Opacity
                    </label>

                    <input
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                        name="overlayOpacity"
                        value={formData.overlayOpacity}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Hero Image
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <div className="flex items-center gap-3 mt-8">
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleChange}
                    />

                    <label>Active Slide</label>
                </div>

                <div className="lg:col-span-2 pt-4">
                    <button
                        disabled={loading}
                        className="bg-[#6B1246] hover:bg-[#540d37] text-white px-7 py-3 rounded-xl font-semibold"
                    >
                        {loading ? "Saving..." : "Create Hero Slide"}
                    </button>
                </div>

            </form>

        </div>
    );
};

export default HeroForm;