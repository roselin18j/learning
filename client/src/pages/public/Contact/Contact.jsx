import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban1.jpeg";
import DonationCTA from "../../../common/Section/DonationCTA";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

export default function Contact() {

    return (
        <>
            <PageBanner
                title="Contact Us"
                image={bannerImg}
            />
            <ContactInformation/>
            <ContactForm/>
            <DonationCTA
                badge="GET IN TOUCH"
                title="We're Here To Help You"
                description="Have questions, need assistance, or want to partner with us? Our team is always ready to hear from you and provide the support you need."
                primaryText="Contact Us"
                secondaryText="Become Volunteer"
                primaryLink="/contact"
                secondaryLink="/volunteer"
            />
        </>
    );
}
