import { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import EventsForm from "./EventsForm";

import {
  getHomeEventsSection,
  updateHomeEventsSection,
} from "../../../../services/home.service";
import { updateEvents} from "../../../../services/services.service";

const Services = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
    const updateEvent = async (data) => {
        await updateHomeEventsSection(data);
    };

  const loadService = async () => {
    try {
      setLoading(true);

      const response = await getHomeEventsSection();

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
      title="Events Section"
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