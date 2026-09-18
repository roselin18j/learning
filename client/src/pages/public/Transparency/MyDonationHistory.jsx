import React, { useState } from "react";
import {
    FaSearch,
    FaDownload,
    FaHandHoldingHeart,
    FaReceipt,
    FaWallet,
    FaCalendarAlt,
} from "react-icons/fa";

export default function MyDonationHistory() {

    const [search, setSearch] = useState("");

    const donations = [
        {
            id: 1,
            date: "15 Sep 2026",
            cause: "Education Support",
            payment: "UPI",
            amount: 2000,
            receipt: "#REC-1001",
        },
        {
            id: 2,
            date: "28 Aug 2026",
            cause: "Healthcare Program",
            payment: "Card",
            amount: 5000,
            receipt: "#REC-1002",
        },
        {
            id: 3,
            date: "10 Aug 2026",
            cause: "Food Distribution",
            payment: "Net Banking",
            amount: 1500,
            receipt: "#REC-1003",
        },
        {
            id: 4,
            date: "22 Jul 2026",
            cause: "Women Empowerment",
            payment: "UPI",
            amount: 3000,
            receipt: "#REC-1004",
        },
    ];

    const filteredDonations = donations.filter((item) =>
        item.cause.toLowerCase().includes(search.toLowerCase())
    );

    const totalDonation = donations.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    return (

        <section className="bg-ivory py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        MY DONATION HISTORY
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Track Every Contribution
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        View your complete donation history, payment details,
                        receipts and total contribution made towards our
                        community initiatives.
                    </p>

                </div>

                {/* Summary */}

                <div className="mt-20 grid gap-8 lg:grid-cols-4">

                    <div className="rounded-[25px] bg-white p-8 shadow-lg">

                        <FaWallet className="text-4xl text-maroon" />

                        <h3 className="mt-5 text-lg font-semibold text-gray-500">
                            Total Donated
                        </h3>

                        <p className="mt-2 text-4xl font-bold text-black">
                            ₹{totalDonation.toLocaleString()}
                        </p>

                    </div>

                    <div className="rounded-[25px] bg-white p-8 shadow-lg">

                        <FaHandHoldingHeart className="text-4xl text-maroon" />

                        <h3 className="mt-5 text-lg font-semibold text-gray-500">
                            Total Donations
                        </h3>

                        <p className="mt-2 text-4xl font-bold text-black">
                            {donations.length}
                        </p>

                    </div>

                    <div className="rounded-[25px] bg-white p-8 shadow-lg">

                        <FaCalendarAlt className="text-4xl text-maroon" />

                        <h3 className="mt-5 text-lg font-semibold text-gray-500">
                            Last Donation
                        </h3>

                        <p className="mt-2 text-xl font-bold text-black">
                            {donations[0].date}
                        </p>

                    </div>

                    <div className="rounded-[25px] bg-white p-8 shadow-lg">

                        <FaReceipt className="text-4xl text-maroon" />

                        <h3 className="mt-5 text-lg font-semibold text-gray-500">
                            Receipts
                        </h3>

                        <p className="mt-2 text-4xl font-bold text-black">
                            {donations.length}
                        </p>

                    </div>

                </div>

                {/* Search */}

                <div className="mx-auto mt-16 max-w-xl">

                    <div className="relative">

                        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search by donation cause..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-14 w-full rounded-full border border-maroon/10 bg-white pl-14 pr-5 outline-none focus:border-maroon"
                        />

                    </div>

                </div>

                {/* Table */}

                <div className="mt-16 overflow-x-auto rounded-[30px] bg-white shadow-lg">

                    <table className="w-full">

                        <thead className="bg-maroon text-white">

                            <tr>

                                <th className="px-6 py-5 text-left">
                                    Date
                                </th>

                                <th className="px-6 py-5 text-left">
                                    Donation For
                                </th>

                                <th className="px-6 py-5 text-left">
                                    Payment
                                </th>

                                <th className="px-6 py-5 text-center">
                                    Amount
                                </th>

                                <th className="px-6 py-5 text-center">
                                    Receipt
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredDonations.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >

                                    <td className="px-6 py-5">
                                        {item.date}
                                    </td>

                                    <td className="px-6 py-5">
                                        {item.cause}
                                    </td>

                                    <td className="px-6 py-5">
                                        {item.payment}
                                    </td>

                                    <td className="px-6 py-5 text-center font-semibold text-maroon">
                                        ₹{item.amount.toLocaleString()}
                                    </td>

                                    <td className="px-6 py-5 text-center">

                                        <button className="inline-flex items-center gap-2 rounded-lg bg-maroon px-4 py-2 text-sm font-medium text-white transition hover:bg-darkmaroon">

                                            <FaDownload />

                                            Download

                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

                {/* Empty */}

                {filteredDonations.length === 0 && (

                    <div className="mt-10 text-center">

                        <h3 className="text-2xl font-bold text-black">
                            No Donations Found
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Try searching with another keyword.
                        </p>

                    </div>

                )}

                {/* Download Statement */}

                <div className="mt-14 text-center">

                    <button className="group inline-flex items-center rounded-xl bg-maroon px-8 py-4 font-semibold text-white transition hover:bg-darkmaroon">

                        <FaDownload className="mr-3 transition group-hover:-translate-y-1" />

                        Download Complete Donation Statement

                    </button>

                </div>

            </div>

        </section>

    );
}