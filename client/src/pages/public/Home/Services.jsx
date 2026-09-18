 import React from "react";
 import { Link } from "react-router-dom";
import {
    FaGraduationCap,
    FaHeartbeat,
    FaHandsHelping,
    FaUsers,
    FaLeaf,
    FaArrowRight,
    FaHeart,
} from "react-icons/fa";

export default function Services() {

    const services = [
        {
            id: 1,
            title: "Education Support",
            description: "Providing educational opportunities, scholarships and learning resources.",
            icon: FaGraduationCap,
        },
        {
            id: 2,
            title: "Healthcare",
            description: "Medical camps, health awareness and essential healthcare services.",
            icon: FaHeartbeat,
        },
        {
            id: 3,
            title: "Food Distribution",
            description: "Nutritious meals and food assistance for families in need.",
            icon: FaHandsHelping,
        },
        {
            id: 4,
            title: "Community Welfare",
            description: "Supporting communities through welfare and development programs.",
            icon: FaUsers,
        },
        {
            id: 5,
            title: "Environmental Care",
            description: "Tree plantation and environmental protection initiatives.",
            icon: FaLeaf,
        },
        {
            id: 6,
            title: "Women & Child Support",
            description: "Empowering women and ensuring a better future for children.",
            icon: FaHandsHelping,
        },
    ];

    return (
        <section className="pb-20 bg-white">

            <div className="container">

                <div className="text-center max-w-3xl mx-auto">

                    <span className="px-5 py-2 rounded-full bg-maroon text-white text-sm font-semibold">
                        OUR SERVICES
                    </span>

                    <h2 className="mt-6 text-5xl font-heading font-bold text-black">
                        Making A Meaningful Difference Every Day
                    </h2>

                    <p className="mt-5 text-gray-600 leading-8">
                        We are committed to improving lives through compassionate
                        programs that create sustainable impact for individuals,
                        families and communities.
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (

                            <div
                                key={service.id}
                                className="group
rounded-3xl
p-8
border border-maroon/10
bg-gradient-to-br
from-white
to-ivory
transition-all
duration-500
hover:-translate-y-2
hover:shadow-[0_20px_50px_rgba(109,8,8,.15)]"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-maroon/10 flex items-center justify-center">

                                    <Icon className="text-3xl text-maroon transition group-hover:scale-110" />

                                </div>

                                <h3 className="mt-6 text-2xl font-heading font-bold text-black">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-gray-600 leading-7">
                                    {service.description}
                                </p>

                                <Link
                                    to="/services"
                                    className="mt-6 inline-flex items-center gap-2 font-semibold text-maroon group-hover:gap-4 transition-all duration-300"
                                >
                                    Learn More
                                    <FaArrowRight />
                                </Link>

                            </div>

                        );

                    })}

                </div>

                <div className="text-center mt-16">



                   <Link to="/services" className="group cursor-pointer  inline-flex items-center rounded-xl bg-maroon px-7 py-4 text-white transition-all duration-300 hover:bg-green">

    <span>View All Services</span>

    <FaArrowRight 
        className="
            ml-0
            text-white
            transition-all
            duration-500
            ml-2
            group-hover:ml-3
            group-hover:text-white
        "
    />

</Link>

                </div>

            </div>

        </section>
    );
}


// import React from "react";
// import { Link } from "react-router-dom";
// import {
//     FaGraduationCap,
//     FaHeartbeat,
//     FaHandsHelping,
//     FaUsers,
//     FaLeaf,
//     FaArrowRight,
// } from "react-icons/fa";

// export default function Services() {

//     const services = [
//         {
//             id: 1,
//             title: "Education Support",
//             description: "Scholarships, school supplies and after-school tutoring for children whose families can't cover the cost of staying in class.",
//             icon: FaGraduationCap,
//         },
//         {
//             id: 2,
//             title: "Healthcare",
//             description: "Free medical camps, screenings and essential medicine in villages where the nearest clinic is a half-day's travel away.",
//             icon: FaHeartbeat,
//         },
//         {
//             id: 3,
//             title: "Food Distribution",
//             description: "Weekly rations delivered to elderly residents and families facing sudden hardship, no application required.",
//             icon: FaHandsHelping,
//         },
//         {
//             id: 4,
//             title: "Community Welfare",
//             description: "Emergency relief funds and welfare programs for households recovering from illness, job loss or disaster.",
//             icon: FaUsers,
//         },
//         {
//             id: 5,
//             title: "Environmental Care",
//             description: "Tree planting and clean-water projects run with local schools, for a healthier district.",
//             icon: FaLeaf,
//         },
//         {
//             id: 6,
//             title: "Women & Child Support",
//             description: "Skills training and safe spaces for women, and protection programs for children at risk of leaving school.",
//             icon: FaHandsHelping,
//         },
//     ];

//     return (
//         <section className="pb-20 bg-white">

//             <div className="container">

//                 <div className="max-w-2xl">

//                     <div className="flex items-center gap-3">
//                         <span className="w-6 h-0.5 bg-maroon" />
//                         <span className="text-sm font-semibold text-maroon">
//                             What we do
//                         </span>
//                     </div>

//                     <h2 className="mt-4 text-4xl lg:text-5xl font-heading font-bold text-blackleading-tight">
//                         Six programs, one purpose
//                     </h2>

//                     <p className="mt-5 text-gray-600 leading-8">
//                         Each one answers a need families in our community told us was
//                         going unmet.
//                     </p>

//                 </div>

//                 <div className="mt-14 divide-y divide-maroon/10 border-t border-b border-maroon/10">

//                     {services.map((service) => {

//                         const Icon = service.icon;

//                         return (

//                             <div
//                                 key={service.id}
//                                 className="group grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 py-8"
//                             >

//                                 <div className="w-16 h-16 bg-maroon flex items-center justify-center shrink-0">
//                                     <Icon className="text-2xl text-white" />
//                                 </div>

//                                 <div>
//                                     <h3 className="text-xl font-heading font-bold text-black">
//                                         {service.title}
//                                     </h3>

//                                     <p className="mt-2 max-w-2xl text-gray-600 leading-7">
//                                         {service.description}
//                                     </p>

//                                     <Link
//                                         to="/services"
//                                         className="mt-4 inline-flex items-center gap-2 font-semibold text-maroon border-b border-transparent group-hover:border-maroon transition-colors duration-300"
//                                     >
//                                         Learn More
//                                         <FaArrowRight className="text-sm" />
//                                     </Link>
//                                 </div>

//                             </div>

//                         );

//                     })}

//                 </div>

//                 <div className="mt-14">

//                     <Link
//                         to="/services"
//                         className="group cursor-pointer inline-flex items-center rounded-sm bg-maroon px-7 py-4 text-white transition-colors duration-300 hover:bg-darkmaroon"
//                     >
//                         <span>View All Services</span>
//                         <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                     </Link>

//                 </div>

//             </div>

//         </section>
//     );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//     FaGraduationCap,
//     FaHeartbeat,
//     FaHandsHelping,
//     FaUsers,
//     FaLeaf,
//     FaArrowRight,
// } from "react-icons/fa";

// export default function Services() {

//     const services = [
//         {
//             id: 1,
//             title: "Education Support",
//             description: "Scholarships, school supplies and after-school tutoring for children whose families can't cover the cost of staying in class.",
//             icon: FaGraduationCap,
//             accent: "border-maroon",
//         },
//         {
//             id: 2,
//             title: "Healthcare",
//             description: "Free medical camps, screenings and essential medicine in villages where the nearest clinic is a half-day's travel away.",
//             icon: FaHeartbeat,
//             accent: "border-gold",
//         },
//         {
//             id: 3,
//             title: "Food Distribution",
//             description: "Weekly rations delivered to elderly residents and families facing sudden hardship, no application required.",
//             icon: FaHandsHelping,
//             accent: "border-green",
//         },
//         {
//             id: 4,
//             title: "Community Welfare",
//             description: "Emergency relief funds and welfare programs for households recovering from illness, job loss or disaster.",
//             icon: FaUsers,
//             accent: "border-maroon",
//         },
//         {
//             id: 5,
//             title: "Environmental Care",
//             description: "Tree planting and clean-water projects run with local schools, for a healthier district.",
//             icon: FaLeaf,
//             accent: "border-gold",
//         },
//         {
//             id: 6,
//             title: "Women & Child Support",
//             description: "Skills training and safe spaces for women, and protection programs for children at risk of leaving school.",
//             icon: FaHandsHelping,
//             accent: "border-green",
//         },
//     ];

//     return (
//         <section className="pb-20 bg-white">

//             <div className="container">

//                 <div className="max-w-2xl">

//                     <div className="flex items-center gap-3">
//                         <span className="w-6 h-0.5 bg-maroon" />
//                         <span className="text-sm font-semibold text-maroon">
//                             What we do
//                         </span>
//                     </div>

//                     <h2 className="mt-4 text-4xl lg:text-5xl font-heading font-bold text-blackleading-tight">
//                         Six programs, one purpose
//                     </h2>

//                     <p className="mt-5 text-black/70 leading-8">
//                         Each one answers a need families in our community told us was
//                         going unmet.
//                     </p>

//                 </div>

//                 <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">

//                     {services.map((service) => {

//                         const Icon = service.icon;

//                         return (

//                             <div
//                                 key={service.id}
//                                 className={`border-l-4 ${service.accent} pl-6`}
//                             >

//                                 <div className="flex items-center gap-3">
//                                     <Icon className="text-2xl text-maroon" />
//                                     <h3 className="text-xl font-heading font-bold text-black">
//                                         {service.title}
//                                     </h3>
//                                 </div>

//                                 <p className="mt-3 text-black/70 leading-7">
//                                     {service.description}
//                                 </p>

//                                 <Link
//                                     to="/services"
//                                     className="group/btn mt-4 inline-flex items-center gap-2 font-semibold text-maroon"
//                                 >
//                                     Learn More
//                                     <FaArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
//                                 </Link>

//                             </div>

//                         );

//                     })}

//                 </div>

//                 <div className="mt-16">
//                     <Link
//                         to="/services"
//                         className="group cursor-pointer inline-flex items-center rounded-sm bg-maroon px-7 py-4 text-white transition-colors duration-300 hover:bg-darkmaroon"
//                     >
//                         <span>View All Services</span>
//                         <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                     </Link>
//                 </div>

//             </div>

//         </section>
//     );
// }