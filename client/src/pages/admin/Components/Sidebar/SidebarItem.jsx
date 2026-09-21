import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const Icon = item.icon;

  if (!item.children) {
    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300
          ${
            isActive
              ? "bg-rose-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`
        }
      >
        <Icon size={20} />
        <span>{item.title}</span>
      </NavLink>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800"
      >
        <div className="flex items-center gap-3">
          <Icon size={20} />
          {item.title}
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="ml-8 mt-2 flex flex-col gap-1">
          {item.children.map((child) => (
            <NavLink
              key={child.path}
              to={child.path}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm transition
                ${
                  isActive
                    ? "bg-rose-500 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {child.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;