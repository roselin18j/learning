import { useEffect, useState } from "react";

import PageHeader from "../../Components/PageHeader/PageHeader";
import WhyChooseForm from "./WhyChooseForm";

import {
    getWhyChoose,
    updateWhyChoose,
} from "../../../../services/home.service";

export default function WhyChoose() {

    const [whyChoose, setWhyChoose] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadWhyChoose = async () => {

        try {

            setLoading(true);

            const response = await getWhyChoose();

            setWhyChoose(response.data.data);

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadWhyChoose();

    }, []);

    const updateSection = async (formData) => {

        await updateWhyChoose(formData);

    };

    if (loading) {

        return (
            <div className="p-8">
                Loading...
            </div>
        );

    }

    return (

        <div className="space-y-6">

            <PageHeader
                title="Why Choose Section"
                subtitle="Manage homepage Why Choose section."
            />

            <WhyChooseForm
                whyChoose={whyChoose}
                updateWhyChoose={updateSection}
                reload={loadWhyChoose}
            />

        </div>

    );

}