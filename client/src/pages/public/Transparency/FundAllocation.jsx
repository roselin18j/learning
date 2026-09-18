import React from "react";

export default function FundAllocation() {

    const funds = [
        {
            id: 1,
            title: "Education Programs",
            percentage: 40,
            amount: "₹32,80,000",
            description:
                "Supporting children through scholarships, school supplies, digital learning and educational initiatives.",
            image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
            activities: [
                "Scholarships",
                "School Supplies",
                "Digital Learning",
                "Career Guidance",
            ],
        },
        {
            id: 2,
            title: "Healthcare Services",
            percentage: 25,
            amount: "₹20,50,000",
            description:
                "Providing free medical camps, medicines, health awareness and preventive healthcare services.",
            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900",
            activities: [
                "Medical Camps",
                "Free Medicines",
                "Health Awareness",
                "Emergency Care",
            ],
        },
        {
            id: 3,
            title: "Food Assistance",
            percentage: 20,
            amount: "₹16,40,000",
            description:
                "Providing nutritious meals, groceries and emergency food support for families in need.",
            image:
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900",
            activities: [
                "Food Kits",
                "Community Meals",
                "Emergency Relief",
                "Nutrition Support",
            ],
        },
        {
            id: 4,
            title: "Community Development",
            percentage: 15,
            amount: "₹12,30,000",
            description:
                "Empowering communities through skill development, women empowerment and environmental initiatives.",
            image:
                "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900",
            activities: [
                "Skill Training",
                "Women Empowerment",
                "Tree Plantation",
                "Community Projects",
            ],
        },
    ];

    return (
        <section className="bg-white py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        FUND ALLOCATION
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold leading-tight text-black">
                        Where Every Rupee Goes
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Every contribution is allocated responsibly to maximize
                        community impact. We publish how funds are distributed
                        across our programs to maintain complete transparency.
                    </p>

                </div>

                {/* Allocation */}

              <div className="mt-20 grid gap-8 lg:grid-cols-2">

    {funds.map((item) => (

        <div
            key={item.id}
            className="overflow-hidden rounded-[30px] border border-maroon/10 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

            {/* Image */}

            <div className="overflow-hidden">

                <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full object-cover transition duration-700 hover:scale-110"
                />

            </div>

            {/* Content */}

            <div className="p-8">

                <div className="flex items-start justify-between gap-4">

                    <div>

                        <h3 className="font-heading text-3xl font-bold text-black">

                            {item.title}

                        </h3>

                        <p className="mt-2 text-lg font-semibold text-maroon">

                            {item.amount}

                        </p>

                    </div>

                    <div className="rounded-full bg-maroon px-5 py-2 text-lg font-bold text-white">

                        {item.percentage}%

                    </div>

                </div>

                <p className="mt-6 leading-8 text-gray-600">

                    {item.description}

                </p>

                {/* Progress */}

                <div className="mt-8">

                    <div className="mb-2 flex justify-between text-sm font-semibold text-black">

                        <span>Fund Utilization</span>

                        <span>{item.percentage}%</span>

                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-200">

                        <div
                            className="h-full rounded-full bg-maroon transition-all duration-700"
                            style={{ width: `${item.percentage}%` }}
                        />

                    </div>

                </div>

                {/* Activities */}

                <div className="mt-8 flex flex-wrap gap-3">

                    {item.activities.map((activity) => (

                        <span
                            key={activity}
                            className="rounded-full border border-maroon/10 bg-ivory px-4 py-2 text-sm font-medium text-blacktransition hover:bg-maroon hover:text-white"
                        >

                            {activity}

                        </span>

                    ))}

                </div>

            </div>

        </div>

    ))}

</div>

                {/* Bottom Note */}

                <div className="mx-auto mt-20 max-w-5xl rounded-[30px] bg-darkmaroon px-10 py-12 text-center">

                    <h3 className="font-heading text-3xl font-bold text-white">
                        Every Expense Is Documented
                    </h3>

                    <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/80">
                        Every rupee received and every rupee spent is recorded,
                        verified and published through our financial reports.
                        We believe transparency builds trust and ensures every
                        donor can clearly see the impact of their contribution.
                    </p>

                </div>

            </div>

        </section>
    );
}