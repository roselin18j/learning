import { useEffect, useState } from "react";
import { Save } from "lucide-react";

export default function EventsForm({
  events,
  updateEvents,
  reload,
}) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    badge: "",
    title: "",
    description: "",
    isActive: true,
  });

  useEffect(() => {
    if (events) {
      setFormData({
        badge: events.badge || "",
        title: events.title || "",
        description: events.description || "",
        isActive: events.isActive ?? true,
      });
    }
  }, [events]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
console.log(formData);
      await updateEvents(formData);

      alert("events section updated successfully.");

      reload();
    } catch (err) {
      console.error(err);
      alert("Update failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-xl bg-white p-8 shadow"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold">
            Badge
          </label>

          <input
            type="text"
            name="badge"
            value={formData.badge}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Description
        </label>

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-3"
        />
      </div>

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
          className="flex items-center gap-2 rounded-lg bg-[#6B1246] px-8 py-3 text-white"
        >
          <Save size={18} />

          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}