import { Route } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Hero from "../pages/admin/Home/Hero/Hero";
import About from "../pages/admin/Home/About/About";
import Services from "../pages/admin/Home/Services/Services";
import Service from "../pages/admin/Services/Services";
import Gallery from "../pages/admin/Gallery/Gallery";
import WhyChoose from "../pages/admin/Home/Whychoose/Whychoose";

export default function AdminRoutes() {
    return (
        <>
            <Route index element={<Dashboard />} />

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="homepage">
                <Route path="hero" element={<Hero />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route
                    path="whychooseus"
                    element={<WhyChoose />}
                />
            </Route>

            <Route path="gallery" element={<Gallery />} />

            <Route
                path="services"
                element={<Service />}
            />
        </>
    );
}