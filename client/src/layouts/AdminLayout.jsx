import { Outlet } from "react-router-dom";
import Sidebar from "../pages/admin/Components/Sidebar/Sidebar";
import Topbar from "../pages/admin/Components/Topbar/Topbar";




export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">

  
      <Sidebar/>


 <div className="ml-72 flex flex-1 flex-col">

        <Topbar />

        <main className="flex-1 p-8">
          <Outlet />
        </main>

      </div>


    </div>
  );
}