import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban2.jpeg";
import ServicesIntro from "./ServicesIntro";
import ServiceList from "./ServiceList";


export default function About() {

    return (
        <>
            <PageBanner
                title="Services"
                image={bannerImg}
            />
           <ServicesIntro/>
           <ServiceList/>
        </>
    );
}