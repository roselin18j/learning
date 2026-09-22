import { Route } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Hero from "../pages/admin/Home/Hero/Hero";
import About from "../pages/admin/Home/About/About";

export default function AdminRoutes() {
    return (
        <>
            <Route index element={<Dashboard />} />

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="homepage">
                <Route path="hero" element={<Hero />} />
                <Route path="about" element={<About/>}/>
            </Route>
        </>
    );
}