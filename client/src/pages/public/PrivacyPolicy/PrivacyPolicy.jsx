import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban1.jpeg";

export default function PrivacyPolicy() {

    const sections = [
        {
            title: "1. Introduction",
            content:
                "Your privacy is important to us. This Privacy Policy explains how our organization collects, uses, stores and protects your personal information when you visit our website, make a donation, register as a volunteer or contact us.",
        },
        {
            title: "2. Information We Collect",
            content:
                "We may collect your name, email address, phone number, address, donation details, volunteer information and any other information you voluntarily provide through our website forms.",
        },
        {
            title: "3. How We Use Your Information",
            content:
                "Your information is used to process donations, communicate with you, respond to enquiries, manage volunteer registrations, improve our services and maintain transparency regarding our charitable activities.",
        },
        {
            title: "4. Donation Information",
            content:
                "All donations are processed securely through approved payment methods. We do not store your banking passwords, card PINs or other confidential financial credentials on our servers.",
        },
        {
            title: "5. Cookies",
            content:
                "Our website may use cookies to improve user experience, remember preferences and analyze website traffic. You can disable cookies through your browser settings if you prefer.",
        },
        {
            title: "6. Data Security",
            content:
                "We take reasonable security measures to protect your personal information from unauthorized access, misuse, alteration or disclosure.",
        },
        {
            title: "7. Third-Party Services",
            content:
                "Our website may contain links to trusted third-party services such as payment gateways or social media platforms. Their privacy practices are governed by their own policies.",
        },
        {
            title: "8. Your Rights",
            content:
                "You may request to access, update or delete your personal information by contacting our team. We will respond to your request in accordance with applicable laws.",
        },
        {
            title: "9. Contact Us",
            content:
                "If you have any questions regarding this Privacy Policy or how your information is handled, please contact our organization using the details provided on our Contact page.",
        },
    ];

    return (
        <>
            <PageBanner
                title="Privacy Policy"
                image={bannerImg}
            />

            <section className="bg-ivory py-24">

                <div className="container">

                    <div className="mx-auto max-w-4xl">

                        <div className="rounded-[35px] bg-white p-10 shadow-lg lg:p-14">

                            <div className="mb-12 text-center">

                                <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                                    PRIVACY POLICY
                                </span>

                                <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                                    Your Privacy Matters
                                </h2>

                                <p className="mt-6 leading-8 text-gray-600">
                                    We are committed to protecting your personal
                                    information and maintaining complete
                                    transparency in how your data is collected,
                                    used and safeguarded.
                                </p>

                            </div>

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