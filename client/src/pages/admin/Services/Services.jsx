import { useEffect, useState } from "react";
import {
    getServices,
    deleteService,
} from "../../../services/services.service";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import ServiceForm from "./ServiceForm";

export default function Services() {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedService, setSelectedService] = useState(null);


    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {

        try {

            const response = await getServices();

            setServices(response.data.data.serviceSection.services);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    // Open Edit Modal
    const handleEdit = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    // Delete Service
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this service?"
        );

        if (!confirmDelete) return;

        try {

            await deleteService(id);

            alert("Service deleted successfully.");

            fetchServices();

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to delete service."
            );

        }

    };

    if (loading) {

        return <p>Loading...</p>;

    }

    return (
        <>
            <div className="mb-8 flex items-center justify-between">

                <h1 className="text-4xl font-bold">
                    Service Management
                </h1>

                <button
                    onClick={() => {

                        setSelectedService(null);

                        setIsModalOpen(true);

                    }}
                    className="rounded-lg bg-maroon px-6 py-3 font-semibold text-white hover:bg-darkmaroon"
                >
                    + Add Service
                </button>

            </div>

            {services.length === 0 ? (

                <div className="rounded-xl border bg-white p-10 text-center shadow-sm">

                    <h2 className="text-2xl font-semibold">
                        No Services Found
                    </h2>

                    <p className="mt-3 text-gray-500">
                        Create your first service.
                    </p>

                </div>

            ) : (

                <div className="grid gap-6">

                    {services.map((service) => (

                        <ServiceCard
                            key={service._id}
                            service={service}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}

                </div>

            )}

            <ServiceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <ServiceForm
                    service={selectedService}
                    onSuccess={() => {
                        fetchServices();
                        setIsModalOpen(false);
                        setSelectedService(null);
                    }}
                />
            </ServiceModal>
        </>
    );

}