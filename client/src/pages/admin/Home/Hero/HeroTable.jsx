import { useState } from "react";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { deleteHeroSlide } from "../../../../services/home.service";

export default function HeroTable({
  hero,
  reload,
  setSelectedHero,
  setOpenModal,
}) {

  const [search, setSearch] = useState("");

  const slides = hero?.slides || [];

  const filteredSlides = slides.filter((slide) =>
    slide.title.toLowerCase().includes(search.toLowerCase()) ||
    slide.badge.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this Hero Slide?")) return;

    try {
      await deleteHeroSlide(id);
      reload();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between p-6 border-b">

        <div>
          <h3 className="text-xl font-semibold">
            Hero Slides
          </h3>

          <p className="text-sm text-slate-500">
            Manage homepage hero slider.
          </p>
        </div>

        <button
  onClick={() => {
    setSelectedHero(null);
    setOpenModal(true);
  }}
  className="bg-[#6B1246] hover:bg-[#55103A] text-white px-5 py-2.5 rounded-xl font-medium transition"
>
  + Create Hero Slide
</button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-5 py-4 text-left">Image</th>

              <th className="px-5 py-4 text-left">Badge</th>

              <th className="px-5 py-4 text-left">Title</th>

              <th className="px-5 py-4 text-left">Description</th>

              <th className="px-5 py-4 text-center">Order</th>

              <th className="px-5 py-4 text-center">Status</th>

              <th className="px-5 py-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredSlides.length === 0 && (

              <tr>

                <td
                  colSpan="7"
                  className="text-center py-10"
                >
                  No Hero Slides Found
                </td>

              </tr>

            )}

            {filteredSlides.map((slide) => (

              <tr
                key={slide._id}
                className="border-b hover:bg-slate-50"
              >

                <td className="px-5 py-4">

                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="w-28 h-16 rounded-lg object-cover"
                  />

                </td>

                <td className="px-5 py-4">

                  <span className="bg-lime-200 px-3 py-1 rounded-full text-xs font-semibold">
                    {slide.badge}
                  </span>

                </td>

                <td className="px-5 py-4 font-semibold">
                  {slide.title}
                </td>

                <td className="px-5 py-4 text-sm text-slate-500 max-w-sm truncate">
                  {slide.description}
                </td>

                <td className="px-5 py-4 text-center">
                  {slide.order}
                </td>

                <td className="px-5 py-4 text-center">

                  {slide.isActive ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                      Inactive
                    </span>
                  )}

                </td>

                <td className="px-5 py-4">

                  <div className="flex justify-center gap-2">

                    {/* Preview */}

                    <button
                      className="w-10 h-10 rounded-xl bg-blue-100 hover:bg-blue-500 hover:text-white transition flex items-center justify-center"
                    >
                      <Eye size={18} />
                    </button>

                    {/* Edit */}

                    <button
                      onClick={() => {
                        setSelectedHero(slide);
                        setOpenModal(true);
                      }}
                      className="w-10 h-10 rounded-xl bg-yellow-100 hover:bg-yellow-500 hover:text-white transition flex items-center justify-center"
                    >
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}

                    <button
                      onClick={() => handleDelete(slide._id)}
                      className="w-10 h-10 rounded-xl bg-red-100 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}