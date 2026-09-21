import { useEffect, useState } from "react";
import {
  X,
  Upload,
  Save,
  Image as ImageIcon,
} from "lucide-react";

import {
  createHeroSlide,
  updateHeroSlide,
} from "../../../../services/home.service";

const defaultForm = {
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
};

export default function HeroModal({
  open,
  onClose,
  hero,
  reload,
}) {
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState("");

  const [formData, setFormData] =
    useState(defaultForm);

  useEffect(() => {
    if (hero) {
      setFormData({
        badge: hero.badge || "",
        title: hero.title || "",
        subtitle: hero.subtitle || "",
        description: hero.description || "",

        primaryButtonText:
          hero.primaryButtonText || "",

        primaryButtonLink:
          hero.primaryButtonLink || "",

        secondaryButtonText:
          hero.secondaryButtonText || "",

        secondaryButtonLink:
          hero.secondaryButtonLink || "",

        imageAlt:
          hero.imageAlt || "",

        overlayOpacity:
          hero.overlayOpacity ?? 0.5,

        order:
          hero.order || 1,

        isActive:
          hero.isActive,
      });

      setPreview(hero.image || "");
      setImage(null);
    } else {
      setFormData(defaultForm);
      setPreview("");
      setImage(null);
    }
  }, [hero, open]);

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

  const handleImage = (e) => {
    const file = e.target.files[0];

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

      Object.keys(formData).forEach(
        (key) => {
          data.append(
            key,
            formData[key]
          );
        }
      );

      if (image) {
        data.append(
          "image",
          image
        );
      }

      if (hero) {
        await updateHeroSlide(
          hero._id,
          data
        );

        alert(
          "Hero Updated Successfully"
        );
      } else {
        await createHeroSlide(
          data
        );

        alert(
          "Hero Created Successfully"
        );
      }

      reload();

      onClose();

    } catch (err) {
      console.log(err);

      alert(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl w-full max-w-6xl max-h-[92vh] overflow-hidden shadow-2xl">

        {/* Header */}

        <div className="flex justify-between items-center border-b px-8 py-5">

          <div>

            <h2 className="text-2xl font-bold">

              {hero
                ? "Edit Hero Slide"
                : "Add Hero Slide"}

            </h2>

            <p className="text-slate-500 mt-1">

              Manage homepage hero content.

            </p>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center"
          >
            <X size={22} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto max-h-[75vh] p-8 space-y-8"
        >
            {/* Image Upload */}

<div className="grid lg:grid-cols-3 gap-8">

  <div className="lg:col-span-1">

    <label className="block text-sm font-semibold mb-3">
      Hero Image
    </label>

    <label className="border-2 border-dashed border-slate-300 rounded-2xl h-72 flex flex-col items-center justify-center cursor-pointer hover:border-[#6B1246] transition">

      {preview ? (

        <img
          src={preview}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />

      ) : (

        <>
          <ImageIcon
            size={50}
            className="text-slate-400"
          />

          <p className="mt-4 text-slate-500">
            Upload Hero Image
          </p>

          <p className="text-xs text-slate-400 mt-2">
            JPG, PNG (1920 × 900)
          </p>
        </>

      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        className="hidden"
      />

    </label>

  </div>

  <div className="lg:col-span-2 grid grid-cols-2 gap-5">

    <div>

      <label className="block mb-2 font-medium">
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

      <label className="block mb-2 font-medium">
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

    <div className="col-span-2">

      <label className="block mb-2 font-medium">
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

    <div className="col-span-2">

      <label className="block mb-2 font-medium">
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

    <div className="col-span-2">

      <label className="block mb-2 font-medium">
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

  </div>

</div>

<hr />

<div className="grid lg:grid-cols-2 gap-6">

  <div className="space-y-5">

    <h3 className="font-bold text-lg">
      Primary Button
    </h3>

    <div>

      <label className="block mb-2 font-medium">
        Button Text
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

      <label className="block mb-2 font-medium">
        Button Link
      </label>

      <input
        type="text"
        name="primaryButtonLink"
        value={formData.primaryButtonLink}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
      />

    </div>

  </div>

  <div className="space-y-5">

    <h3 className="font-bold text-lg">
      Secondary Button
    </h3>

    <div>

      <label className="block mb-2 font-medium">
        Button Text
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

      <label className="block mb-2 font-medium">
        Button Link
      </label>

      <input
        type="text"
        name="secondaryButtonLink"
        value={formData.secondaryButtonLink}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
      />

    </div>

  </div>

</div>

<hr />

<div className="grid lg:grid-cols-2 gap-5">

  <div>

    <label className="block mb-2 font-medium">
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

    <label className="block mb-2 font-medium">
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

</div>

<div className="flex items-center gap-3">

  <input
    type="checkbox"
    name="isActive"
    checked={formData.isActive}
    onChange={handleChange}
    className="w-5 h-5"
  />

  <span className="font-medium">
    Active Slide
  </span>

</div>
{/* Footer */}

<div className="border-t pt-6 flex justify-end gap-4">

  <button
    type="button"
    onClick={onClose}
    className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition font-medium"
  >
    Cancel
  </button>

  <button
    type="submit"
    disabled={loading}
    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#6B1246] hover:bg-[#520d35] text-white font-semibold transition disabled:opacity-50"
  >
    <Save size={18} />

    {loading
      ? hero
        ? "Updating..."
        : "Creating..."
      : hero
      ? "Update Hero"
      : "Create Hero"}
  </button>

</div>

        </form>

      </div>

    </div>
  );
}

        