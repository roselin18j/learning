import { useEffect, useState } from "react";

import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";

import { updateHeroSettings } from "../../../../services/home.service";

const HeroSettings = ({ hero, reload }) => {
  const [formData, setFormData] = useState({
    autoPlay: true,
    autoPlaySpeed: 5000,
    showNavigation: true,
    showPagination: true,
    isActive: true,
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (hero) {
      setFormData({
        autoPlay: hero.autoPlay,
        autoPlaySpeed: hero.autoPlaySpeed,
        showNavigation: hero.showNavigation,
        showPagination: hero.showPagination,
        isActive: hero.isActive,
      });
    }
  }, [hero]);

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
      setSaving(true);

      await updateHeroSettings(formData);

      reload();

      alert("Hero settings updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to update settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card title="Hero Settings">
      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Auto Play */}

          <div className="flex items-center justify-between border rounded-xl p-4">

            <div>
              <h6 className="font-semibold text-slate-700">
                Auto Play
              </h6>

              <p className="text-sm text-slate-500">
                Automatically rotate hero slides.
              </p>
            </div>

            <input
              type="checkbox"
              name="autoPlay"
              checked={formData.autoPlay}
              onChange={handleChange}
              className="h-5 w-5"
            />

          </div>

          {/* Navigation */}

          <div className="flex items-center justify-between border rounded-xl p-4">

            <div>
              <h6 className="font-semibold text-slate-700">
                Navigation Arrows
              </h6>

              <p className="text-sm text-slate-500">
                Show previous / next arrows.
              </p>
            </div>

            <input
              type="checkbox"
              name="showNavigation"
              checked={formData.showNavigation}
              onChange={handleChange}
              className="h-5 w-5"
            />

          </div>

          {/* Pagination */}

          <div className="flex items-center justify-between border rounded-xl p-4">

            <div>
              <h6 className="font-semibold text-slate-700">
                Pagination Dots
              </h6>

              <p className="text-sm text-slate-500">
                Display pagination below slider.
              </p>
            </div>

            <input
              type="checkbox"
              name="showPagination"
              checked={formData.showPagination}
              onChange={handleChange}
              className="h-5 w-5"
            />

          </div>

          {/* Hero Active */}

          <div className="flex items-center justify-between border rounded-xl p-4">

            <div>
              <h6 className="font-semibold text-slate-700">
                Hero Section
              </h6>

              <p className="text-sm text-slate-500">
                Enable or disable hero section.
              </p>
            </div>

            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className="h-5 w-5"
            />

          </div>

        </div>

        {/* Speed */}

        <div className="mt-6">

          <label className="block text-sm font-semibold mb-2">
            Auto Play Speed (milliseconds)
          </label>

          <input
            type="number"
            name="autoPlaySpeed"
            value={formData.autoPlaySpeed}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#450C3F] outline-none"
          />

        </div>

        <div className="mt-8 flex justify-end">

          <Button
            type="submit"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Settings"}
          </Button>

        </div>

      </form>
    </Card>
  );
};

export default HeroSettings;