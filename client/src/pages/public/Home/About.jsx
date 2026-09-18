// import { FaHandsHelping, FaUsers, FaHeart, FaShieldAlt, FaListUl } from "react-icons/fa";


// export default function About() {

//     const stats = [
//         {
//             number: "12+",
//             title: "Years of Service",
//             icon: <FaHandsHelping />
//         },
//         {
//             number: "18K+",
//             title: "Lives Impacted",
//             icon: <FaUsers />
//         },
//         {
//             number: "150+",
//             title: "Active Volunteers",
//             icon: <FaHeart />
//         },
//         {
//             number: "100%",
//             title: "Transparent NGO",
//             icon: <FaShieldAlt />
//         }
//     ];

//     return (

//         <section className="py-20">

//             <div className="container">

//                 <div className="grid lg:grid-cols-2 gap-20 items-center">

//                     <div>

//                         <span className="rounded-full bg-maroon px-5 py-2 text-sm text-white">
//                             ABOUT OUR ORGANIZATION
//                         </span>

//                         <h2 className="mt-6 font-heading text-5xl font-bold text-black">

//                             Serving Humanity With
//                             Compassion & Transparency

//                         </h2>

//                         <p className="mt-6 text-lg leading-8 text-gray-600">

//                             We work to improve lives through education,
//                             healthcare, food support, elderly care and
//                             community development.

//                             Together with volunteers and donors,
//                             we create lasting change.

//                         </p>

//                         <ul className="mt-10 grid grid-cols-2 gap-5">

//                             <li className="flex items-center gap-3">
//                                 <FaHeart className="text-maroon text-sm" />
//                                 <span>Education Support</span>
//                             </li>

//                             <li className="flex items-center gap-3">
//                                 <FaHeart className="text-maroon text-sm" />
//                                 <span>Medical Camps</span>
//                             </li>

//                             <li className="flex items-center gap-3">
//                                 <FaHeart className="text-maroon text-sm" />
//                                 <span>Food Distribution</span>
//                             </li>

//                             <li className="flex items-center gap-3">
//                                 <FaHeart className="text-maroon text-sm" />
//                                 <span>Elderly Care</span>
//                             </li>

//                         </ul>

//                        <button className="group cursor-pointer mt-10 inline-flex items-center rounded-xl bg-maroon px-7 py-4 text-white transition-all duration-300 hover:bg-green">

//     <span>Learn More</span>

//     <FaHeart
//         className="
//             ml-0
//             text-white
//             transition-all
//             duration-500
//             ml-2
//             group-hover:ml-3
//             group-hover:text-white
//         "
//     />

// </button>

//                     </div>

//                     {/* RIGHT */}

//                     <div className="grid grid-cols-2 gap-6">

//                         {stats.map((item) => (

//                             <div
//                                 key={item.title}
//                                 className="rounded-3xl
// bg-ivory
// p-8
// transition-all
// duration-300
// hover:-translate-y-2
// shadow-[0_4px_10px_rgba(45,0,0,0.3)]
// ">

//                                 <div className="text-4xl text-maroon">

//                                     {item.icon}

//                                 </div>

//                                 <h3 className="mt-5 text-4xl font-bold text-black">

//                                     {item.number}

//                                 </h3>

//                                 <p className="mt-3 text-black">

//                                     {item.title}

//                                 </p>

//                             </div>

//                         ))}

//                     </div>

//                 </div>

//             </div>

//         </section>

//     );

// }

import { FaHandsHelping, FaUsers, FaHeart, FaShieldAlt, FaArrowRight } from "react-icons/fa";

export default function About() {

    const stats = [
        {
            number: "12+",
            title: "Years of Service",
            icon: <FaHandsHelping />
        },
        {
            number: "18K+",
            title: "Lives Impacted",
            icon: <FaUsers />
        },
        {
            number: "150+",
            title: "Active Volunteers",
            icon: <FaHeart />
        },
        {
            number: "100%",
            title: "Transparent NGO",
            icon: <FaShieldAlt />
        }
    ];

    return (

        <section className="py-20">

            <div className="container">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <div>

                        <div className="flex items-center gap-3">
                            <span className="w-6 h-0.5 bg-maroon" />
                            <span className="text-sm font-semibold text-green">
                                Who we are
                            </span>
                        </div>

                        <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-bold text-blackleading-tight">

                            Serving Humanity With
                            Compassion & Transparency

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">

                            We work to improve lives through education,
                            healthcare, food support, elderly care and
                            community development.

                            Together with volunteers and donors,
                            we create lasting change.

                        </p>

                        <ul className="mt-10 grid grid-cols-2 gap-5">

                            <li className="flex items-center gap-3">
                                <FaHeart className="text-maroon text-sm" />
                                <span>Education Support</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaHeart className="text-maroon text-sm" />
                                <span>Medical Camps</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaHeart className="text-maroon text-sm" />
                                <span>Food Distribution</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaHeart className="text-maroon text-sm" />
                                <span>Elderly Care</span>
                            </li>

                        </ul>

                        <button className="group cursor-pointer mt-10 inline-flex items-center rounded-sm bg-green px-7 py-4 text-white transition-colors duration-300 hover:bg-maroon">
                            <span>Learn More</span>
                            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                    </div>

                    {/* RIGHT */}

                    <div className="grid grid-cols-2 border-t border-l border-maroon/10">

                        {stats.map((item) => (

                            <div
                                key={item.title}
                                className="p-8 border-r border-b border-maroon/10"
                            >

                                <div className="text-3xl text-maroon">

                                    {item.icon}

                                </div>

                                <h3 className="mt-5 text-4xl font-bold text-black">

                                    {item.number}

                                </h3>

                                <p className="mt-2 text-gray-600">

                                    {item.title}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}