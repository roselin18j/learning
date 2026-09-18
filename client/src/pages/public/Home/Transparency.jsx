import React from "react";
import { Link } from "react-router-dom";
import {
    FaShieldAlt,
    FaFileSignature,
    FaReceipt,
    FaChartLine,
    FaUsers,
    FaArrowRight,
} from "react-icons/fa";

export default function Transparency() {

const transparency = [
  {
    id: 1,
    icon: FaFileSignature,
    title: "Registered Trust",
    desc: "Government registered charitable trust with complete legal compliance."
  },
  {
    id: 2,
    icon: FaReceipt,
    title: "Every Donation Tracked",
    desc: "Every contribution is recorded from receipt to utilization."
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Public Audit Reports",
    desc: "Annual financial reports are published for everyone."
  },
  {
    id: 4,
    icon: FaUsers,
    title: "Impact Shared Openly",
    desc: "Every completed project is documented and shared with donors."
  }
];

    return (
        <section className="bg-white ">

            <div className="container">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        TRANSPARENCY
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-blackleading-tight">
                        Everything We Do
                        <br />
                        Is Transparent
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        From every donation received to every rupee spent,
                        transparency is at the heart of our organization.
                    </p>

                </div>

           <div className="relative mx-auto mt-24 max-w-5xl">

    {/* Center Line */}

    <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 border-l-2 border-dashed border-maroon/40 lg:block"></div>

    {transparency.map((item, index) => {

        const Icon = item.icon;

        return (

            <div
                key={item.id}
                className={`mb-5 flex items-center ${
                    index % 2 === 0
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                }`}
            >

                {/* Card */}

                <div className="w-full lg:w-[44%]">

                    <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1">

                        <div className="flex items-center gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-maroon text-white">

                                <Icon />

                            </div>

                            <h3 className="font-heading text-2xl font-bold text-black">

                                {item.title}

                            </h3>

                        </div>

                        <p className="mt-5 leading-8 text-gray-600">

                            {item.desc}

                        </p>

                    </div>

                </div>

                {/* Number */}

                <div className="relative hidden lg:flex w-[12%] justify-center">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-sm font-bold text-white">

                        {item.id}

                    </div>

                </div>

                <div className="hidden lg:block lg:w-[44%]"></div>

            </div>

        );

    })}

</div>

<div className="mt-24 rounded-[36px] bg-darkmaroon p-12 lg:flex lg:items-center lg:justify-between">

    <div>

        <p className="text-ivory text-sm uppercase tracking-[4px]">

            WE BELIEVE

        </p>

        <h3 className="mt-4 font-heading text-4xl font-bold text-white">

            Trust Is Earned, Not Claimed.

        </h3>

        <p className="mt-5 max-w-xl leading-8 text-white/80">

            Every donation, every expense and every project is documented.
            Transparency isn't a promise—it's our responsibility.

        </p>

    </div>

    <Link
        to="/transparency"
        className="group mt-8 inline-flex items-center rounded-xl bg-ivory px-8 py-4 font-semibold text-blacktransition hover:bg-white lg:mt-0"
    >
        View Full Reports

        <FaArrowRight className="ml-3 transition duration-300 group-hover:translate-x-2" />

    </Link>

</div>

            </div>

        </section>
    );
}