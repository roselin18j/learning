import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function TransparencyPromise() {
    return (
        <section className="bg-maroon py-24 text-white">

            <div className="container">

                <div className="mx-auto max-w-4xl text-center">

                    <span className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold uppercase tracking-[3px]">
                        Transparency Promise
                    </span>

                    <h2 className="mt-8 font-heading text-5xl font-bold leading-tight">
                        Trust Is Earned Through
                        <br />
                        Complete Financial Transparency
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
                        Every donation received is recorded, every expense is
                        documented, and every financial report is shared openly.
                        We are committed to maintaining accountability,
                        transparency, and responsible use of every contribution
                        entrusted to us.
                    </p>

                </div>

                {/* Promise Cards */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    <div className="rounded-[25px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm">

                        <h3 className="text-2xl font-bold">
                            100% Accountable
                        </h3>

                        <p className="mt-4 leading-7 text-white/80">
                            Every donation and every expense is securely
                            recorded and available in our financial reports.
                        </p>

                    </div>

                    <div className="rounded-[25px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm">

                        <h3 className="text-2xl font-bold">
                            Audited Every Year
                        </h3>

                        <p className="mt-4 leading-7 text-white/80">
                            Our accounts are reviewed annually and official
                            reports are published for everyone to access.
                        </p>

                    </div>

                    <div className="rounded-[25px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm">

                        <h3 className="text-2xl font-bold">
                            Need More Details?
                        </h3>

                        <p className="mt-4 leading-7 text-white/80">
                            If you have any questions about donations,
                            expenses, or reports, our finance team will be
                            happy to assist you.
                        </p>

                    </div>

                </div>

                {/* CTA */}

                <div className="mt-20 flex flex-wrap justify-center gap-5">

                    <Link
                        to="/contact"
                        className="group inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-maroon transition hover:bg-ivory"
                    >
                        Contact Finance Team

                        <FaArrowRight className="ml-3 transition group-hover:translate-x-2" />
                    </Link>

                    {/* <button
                        className="group inline-flex items-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-maroon"
                    >
                        <FaDownload className="mr-3 transition group-hover:-translate-y-1" />

                        Download Financial Reports
                    </button> */}

                </div>

            </div>

        </section>
    );
}