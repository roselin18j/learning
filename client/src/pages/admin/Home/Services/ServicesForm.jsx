import { useState } from "react";
import { Save } from "lucide-react";

export default function ServicesForm({
    service,
    updateService,
    reload,
}) {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        badge: service?.badge || "",
        title: service?.title || "",
        subtitle: service?.subtitle || "",
        description: service?.description || "",
        isActive: service?.isActive ?? true,

        services:
            service?.services || [
                {
                    title: "",
                    shortDescription: "",
                    slug: "",
                    order: 1,
                    isActive: true,
                },
            ],
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));
    };

    const handleServiceChange = (
        index,
        field,
        value
    ) => {
        const updated = [...formData.services];

        updated[index][field] = value;

        setFormData({
            ...formData,
            services: updated,
        });
    };

    const addService = () => {
        if (formData.services.length >= 6) return;

        setFormData({
            ...formData,
            services: [
                ...formData.services,
                {
                    title: "",
                    shortDescription: "",
                    slug: "",
                    order: formData.services.length + 1,
                    isActive: true,
                },
            ],
        });
    };

    const removeService = (index) => {
        const updated = [...formData.services];

        updated.splice(index, 1);

        setFormData({
            ...formData,
            services: updated,
        });
    };

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const payload = {
      ...formData,
      services: formData.services.map((item) => ({
        ...item,
        slug:
          item.slug ||
          item.title
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-"),
      })),
    };

    await updateService(payload);

    alert("Services updated successfully");

    reload();
  } catch (err) {
    console.log(err);

    alert("Update failed");
  } finally {
    setLoading(false);
  }
};

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white rounded-xl shadow p-8"
        >
            <div className="grid md:grid-cols-2 gap-6">

                <div>
                    <label className="block mb-2 font-semibold">
                        Badge
                    </label>

                    <input
                        name="badge"
                        value={formData.badge}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">
                        Title
                    </label>

                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>

            </div>

            <div>
                <label className="block mb-2 font-semibold">
                    Subtitle
                </label>

                <input
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3"
                />
            </div>

            <div>
                <label className="block mb-2 font-semibold">
                    Description
                </label>

                <textarea
                    rows="5"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3"
                />
            </div>

            <hr />

            <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                    Services
                </h2>

                <button
                    type="button"
                    onClick={addService}
                    className="bg-green-600 text-white px-5 py-2 rounded-lg"
                >
                    + Add Service
                </button>

            </div>

            {formData.services.map((item, index) => (

                <div
                    key={index}
                    className="border rounded-xl p-6 space-y-4"
                >

                    <div className="flex justify-between items-center">

                        <h3 className="font-bold">
                            Service {index + 1}
                        </h3>

                        <button
                            type="button"
                            onClick={() => removeService(index)}
                            className="text-red-600"
                        >
                            Remove
                        </button>

                    </div>

                    <input
                        placeholder="Title"
                        value={item.title}
                        onChange={(e) =>
                            handleServiceChange(
                                index,
                                "title",
                                e.target.value
                            )
                        }
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <textarea
  rows="3"
  placeholder="Short Description"
  value={item.shortDescription}
  onChange={(e) =>
    handleServiceChange(
      index,
      "shortDescription",
      e.target.value
    )
  }
  className="w-full border rounded-lg px-4 py-3"
/>

                    <input
                        placeholder="Slug"
                        value={item.slug}
                        onChange={(e) =>
                            handleServiceChange(
                                index,
                                "slug",
                                e.target.value
                            )
                        }
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <div className="grid md:grid-cols-2 gap-4">

                        <input
                            type="number"
                            placeholder="Order"
                            value={item.order}
                            onChange={(e) =>
                                handleServiceChange(
                                    index,
                                    "order",
                                    Number(e.target.value)
                                )
                            }
                            className="w-full border rounded-lg px-4 py-3"
                        />

                        <label className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                checked={item.isActive}
                                onChange={(e) =>
                                    handleServiceChange(
                                        index,
                                        "isActive",
                                        e.target.checked
                                    )
                                }
                            />

                            Active

                        </label>

                    </div>

                </div>

            ))}

            <label className="flex items-center gap-3">

                <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                />

                Active Section

            </label>

            <div className="flex justify-end">

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#6B1246] text-white px-8 py-3 rounded-lg flex items-center gap-2"
                >
                    <Save size={18} />

                    {loading ? "Saving..." : "Save Services"}

                </button>

            </div>

        </form>
    );
}