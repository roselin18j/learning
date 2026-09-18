import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban3.jpeg";
import WhyVolunteer from "./WhyVolunteer";
import OurTeam from "../About/OurTeam";
import VolunteerOpportunities from "./VolunteerOpportunities";
import VolunteerForm from "./VolunteerForm";
import VolunteerBenefits from "./VolunteerBenefits";
import DonationCTA from "../../../common/Section/DonationCTA";


export default function Contact() {

    return (
        <>
            <PageBanner
                title="Volunteer"
                image={bannerImg}
            />
            <WhyVolunteer />
            <OurTeam />
            <VolunteerOpportunities />
            <VolunteerForm />
            <VolunteerBenefits />
            <DonationCTA
                badge="JOIN OUR MISSION"
                title="Together We Can Make A Difference"
                description="Every helping hand creates hope for someone in need."
                primaryText="Become Volunteer"
                secondaryText="Donate Now"
                primaryLink="/volunteer"
                secondaryLink="/donate"
            />
        </>
    );
}
