import sidebarData from "./sidebarData";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 shadow-2xl">

      <div className="border-b border-slate-800 p-6">

        <h2 className="text-2xl font-bold text-white">
          NGO 
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Administration Panel
        </p>

      </div>

      <div className="space-y-2 overflow-y-auto p-4">

        {sidebarData.map((item) => (
          <SidebarItem
            key={item.title}
            item={item}
          />
        ))}

      </div>
    </aside>
  );
};

export default Sidebar;