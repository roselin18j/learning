import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/Mainlayout";
import AdminLayout from "../layouts/AdminLayout";
import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";

export default function AppRoutes() {
    return (
        <Routes>

            <Route element={<MainLayout />}>
                {PublicRoutes()}
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                {AdminRoutes()}
            </Route>

        </Routes>
    );
}