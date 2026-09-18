import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Impact from "./Ourimpact";
import WhyChoose from "./Whychoose";
import EventCard from "./EventCard";
import Gallery from "./Gallery";
import DonationCTA from "../../../common/Section/DonationCTA";
import Transparency from "./Transparency";

export default function Home() {
    return (
        <>
           <Hero/>
           <About/>
           <Services/>
           <Transparency/>
           {/* <Impact/> */}
           <WhyChoose/>
           <EventCard/>
           <Gallery/>
           <DonationCTA />
        </>
    )
}