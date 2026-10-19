import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban1.jpeg";
import GalleryImages from "./GalleryImages";
import GalleryVideos from "./GalleryVideos";
import DonationCTA from "../../../common/Section/DonationCTA";



export default function Gallery() {

    return (
        <>
            <PageBanner
                title="Gallery"
                image={bannerImg}
            />
            <GalleryImages />
            <GalleryVideos />
            <DonationCTA
                badge="BE PART OF THE STORY"
                title="Help Us Create More Beautiful Moments"
                description="Every smile, every event and every success story begins with the kindness of people like you."
                primaryText="Donate Now"
                secondaryText="Volunteer"
                primaryLink="/donate"
                secondaryLink="/volunteer"
            />
        </>
    );
}