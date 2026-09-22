import { useEffect, useState } from "react";

import { getAbout } from "../../../../services/home.service";

import PageHeader from "../../Components/PageHeader/PageHeader";

import AboutForm from "./AboutForm";
import AboutPreview from "./AboutPreview";

const About = () => {
  const [about, setAbout] = useState(null);

  const [loading, setLoading] = useState(true);

  const loadAbout = async () => {
    try {
      setLoading(true);

      const response = await getAbout();

      setAbout(response.data.data);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAbout();
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
        title="About Section"
        subtitle="Manage homepage About section."
      />

      <AboutForm
        about={about}
        reload={loadAbout}
      />

      <AboutPreview
        about={about}
      />

    </div>
  );
};

export default About;