import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban1.jpeg";
import AboutSection from "../Home/About";
import MissionVision from "./MissionVision";
import Journey from "./Journey";
import OurTeam from "./OurTeam";
import CoreValue from "./CoreValue";

export default function About() {

    return (
        <>
            <PageBanner
                title="About Us"
                image={bannerImg}
            />
            <AboutSection/>
            <MissionVision/>
            <Journey/>
            <OurTeam/>
            <CoreValue/>
        </>
    );
}