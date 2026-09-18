// import React from "react";
// import { Link } from "react-router-dom";
// import {
//     FaShieldAlt,
//     FaFileInvoiceDollar,
//     FaCheckCircle,
//     FaDownload,
//     FaUniversity,
//     FaBalanceScale,
//     FaHandHoldingHeart,
//     FaArrowRight,
// } from "react-icons/fa";

// export default function Transparency() {

//     // ---- summary figures (replace with real, live numbers) ----
//     const summary = [
//         { label: "Total raised, FY 2025–26", value: "₹84,20,000" },
//         { label: "Total spent on programs", value: "₹69,04,400" },
//         { label: "Spent directly on programs", value: "82%" },
//         { label: "Admin & overhead cost", value: "5%" },
//     ];

//     // ---- where the money goes ----
//     const allocation = [
//         { label: "Program delivery", pct: 82, color: "bg-maroon" },
//         { label: "Community outreach", pct: 10, color: "bg-gold" },
//         { label: "Administration", pct: 5, color: "bg-green" },
//         { label: "Fundraising costs", pct: 3, color: "bg-black/40" },
//     ];

//     // ---- accountability checkpoints ----
//     const checkpoints = [
//         {
//             icon: FaUniversity,
//             title: "Registered trust",
//             description: "Operating under full government charitable registration since 2014, renewed and verified every year.",
//         },
//         {
//             icon: FaFileInvoiceDollar,
//             title: "Every rupee tracked",
//             description: "Each donation is logged against the program it funded, from the receipt to the final expense.",
//         },
//         {
//             icon: FaBalanceScale,
//             title: "Independently audited",
//             description: "An external chartered accountant reviews our books and signs off on our annual financial statement.",
//         },
//         {
//             icon: FaHandHoldingHeart,
//             title: "Impact shared openly",
//             description: "Outcomes from every program go back to donors and the community, whether the news is good or not.",
//         },
//     ];

//     // ---- sample recent donations (anonymised) ----
//     const donations = [
//         { date: "12 Sep 2026", donor: "Anonymous Donor", purpose: "Food Distribution", amount: "₹5,000" },
//         { date: "10 Sep 2026", donor: "R. Kumar", purpose: "Education Support", amount: "₹12,000" },
//         { date: "08 Sep 2026", donor: "Anonymous Donor", purpose: "General Fund", amount: "₹2,500" },
//         { date: "05 Sep 2026", donor: "S. Priya", purpose: "Healthcare Camp", amount: "₹8,000" },
//         { date: "02 Sep 2026", donor: "Anonymous Donor", purpose: "Elderly Care", amount: "₹3,000" },
//     ];

//     // ---- sample recent expenses ----
//     const expenses = [
//         { date: "14 Sep 2026", category: "Medical camp supplies", program: "Healthcare", amount: "₹46,200" },
//         { date: "11 Sep 2026", category: "Ration kits (210 families)", program: "Food Distribution", amount: "₹1,05,000" },
//         { date: "09 Sep 2026", category: "School bags & books", program: "Education Support", amount: "₹28,750" },
//         { date: "06 Sep 2026", category: "Volunteer travel", program: "Administration", amount: "₹6,400" },
//         { date: "03 Sep 2026", category: "Sapling procurement", program: "Environmental Care", amount: "₹9,100" },
//     ];

//     // ---- downloadable documents ----
//     const documents = [
//         { title: "Annual Report 2025–26", meta: "PDF · 3.2 MB" },
//         { title: "Audited Financial Statement 2025–26", meta: "PDF · 1.8 MB" },
//         { title: "12A & 80G Registration Certificate", meta: "PDF · 640 KB" },
//         { title: "Trust Deed & Registration Certificate", meta: "PDF · 410 KB" },
//     ];

//     return (
//         <>

//             {/* Hero */}
//             <section className="bg-ivory pt-20 pb-16">
//                 <div className="container">
//                     <div className="max-w-2xl">
//                         <div className="flex items-center gap-3">
//                             <span className="w-6 h-0.5 bg-gold" />
//                             <span className="text-sm font-semibold text-maroon">
//                                 Transparency
//                             </span>
//                         </div>
//                         <h1 className="mt-4 font-heading text-4xl lg:text-5xl font-bold text-blackleading-tight">
//                             See exactly where every rupee goes.
//                         </h1>
//                         <p className="mt-5 text-black/70 leading-8">
//                             We publish our donations, our expenses, and our audited
//                             accounts openly — because trust isn't something we ask
//                             for, it's something you should be able to check for
//                             yourself.
//                         </p>
//                     </div>

//                     <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-maroon/15">
//                         {summary.map((item) => (
//                             <div key={item.label} className="p-8 border-r border-b border-maroon/15">
//                                 <div className="text-3xl lg:text-4xl font-heading font-bold text-maroon">
//                                     {item.value}
//                                 </div>
//                                 <p className="mt-2 text-sm text-black/60">{item.label}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Fund allocation */}
//             <section className="py-20 bg-white">
//                 <div className="container">
//                     <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] items-start">

//                         <div className="max-w-md">
//                             <div className="flex items-center gap-3">
//                                 <span className="w-6 h-0.5 bg-maroon" />
//                                 <span className="text-sm font-semibold text-maroon">Where it goes</span>
//                             </div>
//                             <h2 className="mt-4 font-heading text-3xl lg:text-4xl font-bold text-blackleading-tight">
//                                 Every rupee, accounted for
//                             </h2>
//                             <p className="mt-5 text-black/70 leading-7">
//                                 Out of every ₹100 donated, ₹82 goes straight into
//                                 programs on the ground. The rest keeps the trust
//                                 running honestly and legally.
//                             </p>
//                         </div>

//                         <div className="space-y-7">
//                             {allocation.map((item) => (
//                                 <div key={item.label}>
//                                     <div className="flex items-baseline justify-between mb-2">
//                                         <span className="font-semibold text-black">{item.label}</span>
//                                         <span className="font-heading font-bold text-maroon">{item.pct}%</span>
//                                     </div>
//                                     <div className="h-2.5 w-full bg-ivory">
//                                         <div
//                                             className={`h-full ${item.color}`}
//                                             style={{ width: `${item.pct}%` }}
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             {/* Accountability checkpoints */}
//             <section className="py-20 bg-ivory">
//                 <div className="container">
//                     <div className="max-w-2xl mx-auto text-center">
//                         <div className="flex items-center justify-center gap-3">
//                             <span className="w-6 h-0.5 bg-gold" />
//                             <span className="text-sm font-semibold text-maroon">How we prove it</span>
//                         </div>
//                         <h2 className="mt-4 font-heading text-3xl lg:text-4xl font-bold text-black">
//                             Four checkpoints, every year
//                         </h2>
//                     </div>

//                     <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                         {checkpoints.map((item) => {
//                             const Icon = item.icon;
//                             return (
//                                 <div key={item.title} className="border-t-4 border-maroon bg-white p-7">
//                                     <Icon className="text-2xl text-maroon" />
//                                     <h3 className="mt-5 font-heading text-lg font-bold text-black">
//                                         {item.title}
//                                     </h3>
//                                     <p className="mt-2 text-sm text-black/60 leading-6">
//                                         {item.description}
//                                     </p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* Recent donations & expenses ledger */}
//             <section className="py-20 bg-white">
//                 <div className="container">
//                     <div className="max-w-2xl">
//                         <div className="flex items-center gap-3">
//                             <span className="w-6 h-0.5 bg-maroon" />
//                             <span className="text-sm font-semibold text-maroon">The ledger</span>
//                         </div>
//                         <h2 className="mt-4 font-heading text-3xl lg:text-4xl font-bold text-blackleading-tight">
//                             Recent donations & expenses
//                         </h2>
//                         <p className="mt-5 text-black/70 leading-7">
//                             A running sample of activity — the full, continuously
//                             updated ledger is available to download below.
//                         </p>
//                     </div>

//                     <div className="mt-12 grid gap-12 lg:grid-cols-2">

//                         {/* Donations */}
//                         <div>
//                             <h3 className="font-heading text-xl font-bold text-blackmb-4">
//                                 Donations received
//                             </h3>
//                             <div className="border-t border-maroon/15">
//                                 {donations.map((d, i) => (
//                                     <div key={i} className="grid grid-cols-[90px_1fr_auto] gap-4 items-center py-4 border-b border-maroon/15">
//                                         <span className="text-xs text-black/50">{d.date}</span>
//                                         <div>
//                                             <p className="font-medium text-blacktext-sm">{d.donor}</p>
//                                             <p className="text-xs text-black/50">{d.purpose}</p>
//                                         </div>
//                                         <span className="font-heading font-bold text-maroon text-sm">{d.amount}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Expenses */}
//                         <div>
//                             <h3 className="font-heading text-xl font-bold text-blackmb-4">
//                                 Expenses recorded
//                             </h3>
//                             <div className="border-t border-maroon/15">
//                                 {expenses.map((e, i) => (
//                                     <div key={i} className="grid grid-cols-[90px_1fr_auto] gap-4 items-center py-4 border-b border-maroon/15">
//                                         <span className="text-xs text-black/50">{e.date}</span>
//                                         <div>
//                                             <p className="font-medium text-blacktext-sm">{e.category}</p>
//                                             <p className="text-xs text-black/50">{e.program}</p>
//                                         </div>
//                                         <span className="font-heading font-bold text-green text-sm">{e.amount}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                     </div>

//                     <Link
//                         to="/transparency/ledger"
//                         className="group mt-10 inline-flex items-center gap-2 font-semibold text-maroon"
//                     >
//                         View full ledger
//                         <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
//                     </Link>
//                 </div>
//             </section>

//             {/* Downloadable documents */}
//             <section className="py-20 bg-ivory">
//                 <div className="container">
//                     <div className="max-w-2xl">
//                         <div className="flex items-center gap-3">
//                             <span className="w-6 h-0.5 bg-gold" />
//                             <span className="text-sm font-semibold text-maroon">Documents</span>
//                         </div>
//                         <h2 className="mt-4 font-heading text-3xl lg:text-4xl font-bold text-blackleading-tight">
//                             Read the paperwork yourself
//                         </h2>
//                     </div>

//                     <div className="mt-10 divide-y divide-maroon/15 border-t border-b border-maroon/15">
//                         {documents.map((doc) => (
//                             <a
//                                 key={doc.title}
//                                 href="#"
//                                 className="group flex items-center justify-between gap-4 py-6"
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <FaShieldAlt className="text-xl text-maroon shrink-0" />
//                                     <div>
//                                         <p className="font-semibold text-black">{doc.title}</p>
//                                         <p className="text-xs text-black/50 mt-0.5">{doc.meta}</p>
//                                     </div>
//                                 </div>
//                                 <FaDownload className="text-maroon transition-transform duration-300 group-hover:translate-y-0.5" />
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Closing trust statement */}
//             <section className="bg-maroon">
//                 <div className="container py-16">
//                     <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
//                         <div>
//                             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight max-w-lg">
//                                 Trust is earned, not claimed.
//                             </h2>
//                             <p className="mt-4 max-w-xl text-white/75 leading-7">
//                                 If any figure here raises a question, ask us directly —
//                                 our finance team responds to every donor query within
//                                 two working days.
//                             </p>
//                         </div>
//                         <div className="flex gap-4 lg:justify-end">
//                             <Link
//                                 to="/contact"
//                                 className="group inline-flex items-center rounded-sm bg-gold px-7 py-4 font-semibold text-blacktransition-colors duration-300 hover:bg-white"
//                             >
//                                 <span>Ask a Question</span>
//                                 <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="h-3 w-full"
//                     style={{
//                         backgroundImage:
//                             "linear-gradient(135deg, #C8A45D 25%, transparent 25%), linear-gradient(225deg, #C8A45D 25%, transparent 25%)",
//                         backgroundSize: "14px 14px",
//                         backgroundColor: "#2d0000",
//                     }}
//                 />
//             </section>

//         </>
//     );
// }


import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban3.jpeg";
import TransparencyOverview from "./TransparencyOverview";
import FundAllocation from "./FundAllocation";
import TransactionLedger from "./TransactionLedger";
import ReportsSection from "./ReportsSection";
import MyDonationHistory from "./MyDonationHistory";
import TransparencyPromise from "./TransparencyPromise";

export default function Transparency() {
    return (
        <>
            <PageBanner title="Transparency"
                image={bannerImg} />
                <TransparencyOverview/>
                <FundAllocation/>
                <TransactionLedger/>
                <ReportsSection/>
                {/* <MyDonationHistory/> */}
                <TransparencyPromise/>
        </>
    )
}