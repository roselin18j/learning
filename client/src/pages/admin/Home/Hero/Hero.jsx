import { useEffect, useState } from "react";

import HeroSettings from "./HeroSettings";
import HeroForm from "./HeroForm";
import HeroList from "./HeroList";

import { getHome } from "../../../../services/home.service";

import PageHeader from "../../Components/PageHeader/PageHeader";

const Hero = () => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadHero = async () => {
    try {
      setLoading(true);

      const response = await getHome();

      setHero(response.data.data.hero);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHero();
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
        title="Hero Section"
        subtitle="Manage homepage hero slider and settings."
        buttonText="+ Add Hero Slide"
      />

      <HeroSettings
        hero={hero}
        reload={loadHero}
      />

      <HeroForm
        reload={loadHero}
      />

      <HeroList
        hero={hero}
        reload={loadHero}
      />

    </div>
  );
};

export default Hero;