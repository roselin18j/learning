import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban3.jpeg";
import EventsList from "./EventsList";


export default function About() {

    return (
        <>
            <PageBanner
                title="Events"
                image={bannerImg}
            />
           <EventsList/>
        </>
    );
}