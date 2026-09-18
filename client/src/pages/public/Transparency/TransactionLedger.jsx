import React, { useMemo, useState } from "react";
import {
    FaSearch,
    FaDownload,
} from "react-icons/fa";

export default function TransactionLedger() {

    const [activeTab, setActiveTab] = useState("donation");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    // Later replace with API response
    const donations = [
        {
            id: 1,
            donor: "Roseline",
            amount: "₹5,000",
            method: "UPI",
            date: "17 Sep 2026",
            status: "Completed",
            receipt: "#DON1001",
        },
        {
            id: 2,
            donor: "John",
            amount: "₹2,000",
            method: "Card",
            date: "16 Sep 2026",
            status: "Completed",
            receipt: "#DON1002",
        },
        {
            id: 3,
            donor: "Anonymous",
            amount: "₹1,500",
            method: "Net Banking",
            date: "15 Sep 2026",
            status: "Completed",
            receipt: "#DON1003",
        },
         {
            id: 4,
            donor: "Leo",
            amount: "₹15,000",
            method: "Net Banking",
            date: "16 Sep 2026",
            status: "Completed",
            receipt: "#DON1004",
        },
    ];

    const expenses = [
        {
            id: 1,
            purpose: "Food Distribution",
            amount: "₹12,500",
            payment: "Bank Transfer",
            date: "17 Sep 2026",
            status: "Approved",
            invoice: "#EXP1001",
        },
        {
            id: 2,
            purpose: "Medical Camp",
            amount: "₹8,200",
            payment: "Bank Transfer",
            date: "15 Sep 2026",
            status: "Approved",
            invoice: "#EXP1002",
        },
        {
            id: 3,
            purpose: "School Kits",
            amount: "₹5,600",
            payment: "Bank Transfer",
            date: "12 Sep 2026",
            status: "Approved",
            invoice: "#EXP1003",
        },
    ];

    const data = useMemo(() => {

        const list =
            activeTab === "donation"
                ? donations
                : expenses;

        return list.filter((item) =>

            JSON.stringify(item)
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [activeTab, search]);

    return (

        <section className="bg-ivory py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">

                        TRANSACTION LEDGER

                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">

                        Donation & Expense Ledger

                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">

                        Browse every donation received and every expense made
                        during the current financial year. All records are
                        publicly available to maintain complete transparency.

                    </p>

                </div>

                {/* Summary */}

                <div className="mt-16 grid gap-6 md:grid-cols-4">

                    <div className="rounded-3xl bg-white p-6 shadow">

                        <p className="text-gray-500">
                            Total Donation
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-maroon">
                            ₹18.45L
                        </h3>

                    </div>

                    <div className="rounded-3xl bg-white p-6 shadow">

                        <p className="text-gray-500">
                            Total Expense
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-maroon">
                            ₹15.20L
                        </h3>

                    </div>

                    <div className="rounded-3xl bg-white p-6 shadow">

                        <p className="text-gray-500">
                            Balance
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-maroon">
                            ₹3.25L
                        </h3>

                    </div>

                    <div className="rounded-3xl bg-white p-6 shadow">

                        <p className="text-gray-500">
                            Transactions
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-maroon">
                            1,248
                        </h3>

                    </div>

                </div>

                {/* Toolbar */}

                <div className="mt-14 rounded-3xl bg-white p-6 shadow">

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                        <div className="flex rounded-full bg-ivory p-1">

                            <button
                                onClick={() => setActiveTab("donation")}
                                className={`rounded-full px-6 py-3 font-semibold transition ${
                                    activeTab === "donation"
                                        ? "bg-maroon text-white"
                                        : ""
                                }`}
                            >
                                Donations
                            </button>

                            <button
                                onClick={() => setActiveTab("expense")}
                                className={`rounded-full px-6 py-3 font-semibold transition ${
                                    activeTab === "expense"
                                        ? "bg-maroon text-white"
                                        : ""
                                }`}
                            >
                                Expenses
                            </button>

                        </div>

                        <div className="relative w-full lg:w-80">

                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                                placeholder={`Search ${activeTab}...`}
                                className="h-12 w-full rounded-full border border-maroon/10 pl-12 pr-4 outline-none"
                            />

                        </div>

                        <button className="inline-flex items-center rounded-xl bg-maroon px-6 py-3 font-semibold text-white">

                            <FaDownload className="mr-3"/>

                            Download Current Year Report

                        </button>

                    </div>

                </div>

                {/* Table */}

                <div className="mt-10 overflow-hidden rounded-[30px] bg-white shadow">

                    <table className="w-full">

                        <thead className="bg-maroon text-white">

                            {activeTab === "donation" ? (

                                <tr>

                                    <th className="p-5 text-left">Donor</th>

                                    <th>Amount</th>

                                    <th>Method</th>

                                    <th>Date</th>

                                    <th>Status</th>

                                    <th>Receipt</th>

                                </tr>

                            ) : (

                                <tr>

                                    <th className="p-5 text-left">Purpose</th>

                                    <th>Amount</th>

                                    <th>Payment</th>

                                    <th>Date</th>

                                    <th>Status</th>

                                    <th>Invoice</th>

                                </tr>

                            )}

                        </thead>

                        <tbody>

                            {data.map((item)=>(

                                <tr key={item.id} className="border-b">

                                    {activeTab==="donation" ? (

                                        <>
                                            <td className="p-5">{item.donor}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.method}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="font-semibold text-maroon">
                                                {item.receipt}
                                            </td>
                                        </>

                                    ) : (

                                        <>
                                            <td className="p-5">{item.purpose}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.payment}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="font-semibold text-maroon">
                                                {item.invoice}
                                            </td>
                                        </>

                                    )}

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </section>

    );

}