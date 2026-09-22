import { useEffect, useState } from "react";

import HeroSettings from "./HeroSettings";
import HeroForm from "./HeroForm";
import HeroList from "./HeroList";

import { getHome } from "../../../../services/home.service";

import PageHeader from "../../Components/PageHeader/PageHeader";
import HeroTable from "./HeroTable";
import HeroModal from "./HeroModal";

const Hero = () => {
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

    const [previewHero, setPreviewHero] = useState(null);

    const [deleteHero, setDeleteHero] = useState(null);

    const [selectedHero, setSelectedHero] = useState(null);
    const [openModal, setOpenModal] = useState(false);


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
                onClick={() => {
                    setSelectedHero(null);      // Create mode
                    setIsHeroModalOpen(true);
                }}
            />

            <HeroSettings
                hero={hero}
                reload={loadHero}
            />

            <HeroTable
                hero={hero}
                reload={loadHero}
                setSelectedHero={setSelectedHero}
                setOpenModal={setOpenModal}
            />

            <HeroModal
                open={openModal}
                hero={selectedHero}
                reload={loadHero}
                onClose={() => {
                    setOpenModal(false);
                    setSelectedHero(null);
                }}
            />


            <HeroList
                hero={hero}
                reload={loadHero}
            />

        </div>
    );
};

export default Hero;