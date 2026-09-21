import { Route } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Hero from "../pages/admin/Home/Hero/Hero";

export default function AdminRoutes() {
    return (
        <>
            <Route index element={<Dashboard />} />

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="homepage">
                <Route path="hero" element={<Hero />} />
            </Route>
        </>
    );
}