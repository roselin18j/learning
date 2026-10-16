import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban2.jpeg";
import ServiceList from "./ServiceList";

export default function Services() {
    return (
        <>
            <PageBanner
                title="Services"
                image={bannerImg}
            />

            <ServiceList />
        </>
    );
}