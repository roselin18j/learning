import { Route } from "react-router-dom";

import Home from "../pages/public/Home/Home";
import About from "../pages/public/About/About";
import Services from "../pages/public/Services/Services";
import ServiceDetails from "../pages/public/Services/ServiceDetails";
import Events from "../pages/public/Events/Events";
import EventsDetails from "../pages/public/Events/EventsDetails";
import Transparency from "../pages/public/Transparency/Transparency";
import Gallery from "../pages/public/Gallery/Gallery";
import Contact from "../pages/public/Contact/Contact";
import Volunteer from "../pages/public/Volunteer/Volunteer";
import PrivacyPolicy from "../pages/public/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/public/TermsConditions/TermsConditions";
import NotFound from "../pages/public/NotFound/NotFound";

export default function PublicRoutes() {
    return (
        <>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetails />} />
            <Route path="events" element={<Events />} />
            <Route path="events/:slug" element={<EventsDetails />} />
            <Route path="transparency" element={<Transparency />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
        </>
    );
}