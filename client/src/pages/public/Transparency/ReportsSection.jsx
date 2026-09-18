import {
    FaDownload,
    FaFilePdf,
    FaCalendarAlt,
} from "react-icons/fa";

export default function ReportsSection() {

    const reports = [
        {
            id: 1,
            year: "2025 - 2026",
            annual: true,
            donation: true,
            expense: true,
            audit: true,
            updated: "15 Sep 2026",
        },
        {
            id: 2,
            year: "2024 - 2025",
            annual: true,
            donation: true,
            expense: true,
            audit: true,
            updated: "31 Mar 2025",
        },
        {
            id: 3,
            year: "2023 - 2024",
            annual: true,
            donation: true,
            expense: true,
            audit: true,
            updated: "31 Mar 2024",
        },
    ];

    return (

        <section className="bg-white py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        REPORT ARCHIVE
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">

                        Monthly & Yearly Reports

                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">

                        Download financial reports, donation summaries,
                        expense statements and audit reports from previous
                        financial years. Every report is published to
                        maintain complete transparency.

                    </p>

                </div>

                {/* Reports */}

                <div className="mt-20 space-y-8">

                    {reports.map((item) => (

                        <div
                            key={item.id}
                            className="rounded-[30px] border border-maroon/10 bg-ivory p-10 shadow-lg transition duration-300 hover:shadow-xl"
                        >

                            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                                {/* Left */}

                                <div>

                                    <span className="rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-white">

                                        Financial Year

                                    </span>

                                    <h3 className="mt-5 font-heading text-4xl font-bold text-black">

                                        {item.year}

                                    </h3>

                                    <div className="mt-5 flex items-center gap-3 text-gray-600">

                                        <FaCalendarAlt className="text-maroon" />

                                        Last Updated :
                                        {item.updated}

                                    </div>

                                </div>

                                {/* Center */}

                                <div className="grid gap-4 sm:grid-cols-2">

                                    <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4">

                                        <FaFilePdf className="text-2xl text-maroon" />

                                        <span>Annual Report</span>

                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4">

                                        <FaFilePdf className="text-2xl text-maroon" />

                                        <span>Donation Summary</span>

                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4">

                                        <FaFilePdf className="text-2xl text-maroon" />

                                        <span>Expense Report</span>

                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4">

                                        <FaFilePdf className="text-2xl text-maroon" />

                                        <span>Audit Statement</span>

                                    </div>

                                </div>

                                {/* Right */}

                                <div>

                                    <button
                                        className="group inline-flex items-center rounded-xl bg-maroon px-8 py-4 font-semibold text-white transition hover:bg-darkmaroon"
                                    >

                                        <FaDownload className="mr-3 transition group-hover:-translate-y-1" />

                                        Download Reports

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}