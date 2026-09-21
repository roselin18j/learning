import {
  Bell,
  Search,
  Moon,
  Sun,
  Menu,
  UserCircle,
  LogOut,
  Settings,
} from "lucide-react";

const Topbar = () => {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">

      {/* Left */}
      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden">
          <Menu size={22} />
        </button>

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-80 rounded-xl border border-slate-300 py-2 pl-11 pr-4 outline-none transition focus:border-rose-500"
          />
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

    

        {/* Notification */}

        <button className="relative rounded-xl p-2 hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* User */}

        <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-slate-100">

          <UserCircle
            size={42}
            className="text-slate-600"
          />

          <div className="hidden md:block">

            <h4 className="text-sm font-semibold">
              Roselin
            </h4>

            <p className="text-xs text-slate-500">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;