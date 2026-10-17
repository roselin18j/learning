import { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import ServicesForm from "./ServicesForm";

import {
  getHomeServicesSection,
  updateHomeServicesSection,
} from "../../../../services/home.service";
import { updateService } from "../../../../services/services.service";

const Services = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
    const updateService = async (data) => {
        await updateHomeServicesSection(data);
    };

  const loadService = async () => {
    try {
      setLoading(true);

      const response = await getHomeServicesSection();

      setService(response.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadService();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

return (
  <div className="space-y-6">

    <PageHeader
      title="Services Section"
      subtitle="Manage homepage services section."
    />

    <ServicesForm
  service={service}
  updateHomeServicesSection={updateHomeServicesSection}
      updateService={updateService}
  reload={loadService}
/>

  </div>
);
};

export default Services;