import { useEffect, useState } from "react";
import { getService } from "../../../../services/home.service";
import PageHeader from "../../Components/PageHeader/PageHeader";


const Services = () => {
  const [service, setService] = useState(null);

  const [loading, setLoading] = useState(true);

  const loadService = async () => {
    try {
      setLoading(true);

      const response = await getService();

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

      {service && (
        <pre className="bg-gray-100 p-4 rounded-lg">
          {JSON.stringify(service, null, 2)}
        </pre>
      )}

    </div>
  );
  
};

export default Services;