import { useEffect, useState } from "react";
import { getServices } from "../../../services/services.service";
import { getHomeServicesSection } from "../../../services/home.service";

export default function Services() {
  const [services, setServices] = useState([]);
  const [heading, setHeading] = useState({});

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const servicesRes = await getServices();
      const headingRes = await getHomeServicesSection();

      console.log("Services API:", servicesRes.data);
      console.log("Heading API:", headingRes.data);

      // Try both possible response structures
      const headingData =
        headingRes?.data?.data?.servicesSection ||
        headingRes?.data?.data?.serviceSection ||
        headingRes?.data?.data ||
        {};

      setHeading(headingData);

      const allServices =
        servicesRes?.data?.data?.serviceSection?.services ||
        servicesRes?.data?.data?.servicesSection?.services ||
        servicesRes?.data?.data?.services ||
        [];

      const homepageServices = allServices
        .filter((service) => service.showOnHomepage)
        .sort((a, b) => (a.homepageOrder || 0) - (b.homepageOrder || 0));

      setServices(homepageServices);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  return (
    <section className="py-20">
      <div className="container">

        <div className="text-center max-w-3xl mx-auto mb-16">

          {heading.badge && (
            <span className="px-5 py-2 rounded-full bg-maroon text-white text-sm font-semibold">
              {heading.badge}
            </span>
          )}

          {heading.title && (
            <h2 className="mt-6 text-5xl font-heading font-bold">
              {heading.title}
            </h2>
          )}

          {heading.subtitle && (
            <h4 className="mt-4 text-xl text-maroon">
              {heading.subtitle}
            </h4>
          )}

          {heading.description && (
            <p className="mt-5 text-gray-600 leading-8">
              {heading.description}
            </p>
          )}

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service._id}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={service.image?.url}
                alt={service.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}