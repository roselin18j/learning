import { FaEdit, FaTrash } from "react-icons/fa";

export default function ServiceCard({
    service,
    onEdit,
    onDelete,
}) {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md lg:flex-row">

            <div className="lg:w-72">
                <img
                    src={service.image?.url}
                    alt={service.title}
                    className="h-64 w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">

                <div>

                    <div className="flex items-start justify-between">

                        <div>
                            <h2 className="text-2xl font-bold">
                                {service.title}
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                {service.slug}
                            </p>
                        </div>

                    </div>

                    <p className="mt-5 text-gray-600">
                        {service.shortDescription}
                    </p>

                </div>

                <div className="mt-8 flex justify-end gap-3">

                    <button
                        onClick={() => onEdit(service)}
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white"
                    >
                        <FaEdit />
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(service._id)}
                        className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2 text-white"
                    >
                        <FaTrash />
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}