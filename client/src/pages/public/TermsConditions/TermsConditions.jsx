import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban1.jpeg";

export default function TermsConditions() {

    const sections = [
        {
            title: "1. Acceptance of Terms",
            content:
                "By accessing and using this website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using our website.",
        },
        {
            title: "2. Website Usage",
            content:
                "Our website is intended to provide information about our charitable activities, events, donation programs and volunteer opportunities. Users agree to use this website responsibly and only for lawful purposes.",
        },
        {
            title: "3. Donations",
            content:
                "All donations made through our organization are voluntary. Donations help support our charitable programs and community initiatives. Once processed, donations may not be refundable except where required by applicable law.",
        },
        {
            title: "4. Volunteer Participation",
            content:
                "Volunteers are expected to provide accurate information during registration and follow the organization's guidelines while participating in any activity, event or community program.",
        },
        {
            title: "5. Intellectual Property",
            content:
                "All content on this website, including text, images, graphics, logos and other materials, belongs to our organization unless otherwise stated. Unauthorized copying, reproduction or distribution is prohibited.",
        },
        {
            title: "6. User Responsibilities",
            content:
                "Users must not submit false information, misuse website services, attempt unauthorized access or engage in any activity that may harm the website or other users.",
        },
        {
            title: "7. Limitation of Liability",
            content:
                "While we strive to provide accurate and up-to-date information, we do not guarantee that all website content is free from errors or interruptions. The organization shall not be liable for any indirect damages resulting from website usage.",
        },
        {
            title: "8. Changes to Terms",
            content:
                "We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the website after changes are published constitutes acceptance of the revised terms.",
        },
        {
            title: "9. Contact Information",
            content:
                "If you have any questions regarding these Terms & Conditions, please contact us through the Contact page available on this website.",
        },
    ];

    return (
        <>
            <PageBanner
                title="Terms & Conditions"
                image={bannerImg}
            />

            <section className="bg-ivory py-24">

                <div className="container">

                    <div className="mx-auto max-w-4xl">

                        <div className="rounded-[35px] bg-white p-10 shadow-lg lg:p-14">

                            {/* Heading */}

                            <div className="mb-12 text-center">

                                <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                                    TERMS & CONDITIONS
                                </span>

                                <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                                    Terms of Use
                                </h2>

                                <p className="mt-6 leading-8 text-gray-600">
                                    These Terms & Conditions govern your use of
                                    our website, donations, volunteer
                                    registrations and all services provided by
                                    our organization. Please read them
                                    carefully before using our website.
                                </p>

                            </div>

                            {/* Sections */}

                            <div className="space-y-10">

                                {sections.map((item, index) => (

                                    <div
                                        key={index}
                                        className="border-b border-gray-200 pb-8 last:border-none last:pb-0"
                                    >

                                        <h3 className="font-heading text-3xl font-bold text-black">
                                            {item.title}
                                        </h3>

                                        <p className="mt-5 leading-8 text-gray-600">
                                            {item.content}
                                        </p>

                                    </div>

                                ))}

                            </div>

                            {/* Footer */}

                            <div className="mt-14 rounded-2xl bg-maroon p-8 text-center text-white">

                                <h3 className="font-heading text-2xl font-bold">
                                    Last Updated
                                </h3>

                                <p className="mt-3 text-white/90">
                                    September 2026
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}