import { FaEdit, FaTrash, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function EventCard({
    event,
    onEdit,
    onDelete,
}) {

    return (
        <div className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md lg:flex-row">

            {/* Image */}
            <div className="lg:w-72">
                <img
                    src={event.image?.url}
                    alt={event.image?.alt || event.title}
                    className="h-64 w-full object-cover"
                />
            </div>


            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-6">


                <div>


                    <div className="flex items-start justify-between">

                        <div>

                            <h2 className="text-2xl font-bold">
                                {event.title}
                            </h2>


                            <p className="mt-1 text-sm text-gray-500">
                                {event.slug}
                            </p>

                        </div>


                        <span
                            className={`rounded-full px-3 py-1 text-sm font-medium
                            ${
                                event.status === "Completed"
                                    ? "bg-green-100 text-green-700"
                                    :
                                event.status === "Ongoing"
                                    ? "bg-yellow-100 text-yellow-700"
                                    :
                                    "bg-blue-100 text-blue-700"
                            }`}
                        >
                            {event.status}
                        </span>


                    </div>



                    <p className="mt-5 text-gray-600">
                        {event.shortDescription}
                    </p>



                    <div className="mt-5 space-y-2 text-sm text-gray-600">


                        <p className="flex items-center gap-2">
                            <FaCalendarAlt />

                            {
                                new Date(event.eventDate)
                                .toLocaleDateString()
                            }

                        </p>



                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt />

                            {event.location}

                        </p>


                    </div>



                    <div className="mt-5 flex gap-3">


                        {
                            event.showOnHomepage && (
                                <span className="rounded bg-purple-100 px-3 py-1 text-xs text-purple-700">
                                    Homepage
                                </span>
                            )
                        }



                        {
                            event.isPublished && (
                                <span className="rounded bg-green-100 px-3 py-1 text-xs text-green-700">
                                    Published
                                </span>
                            )
                        }


                    </div>



                </div>




                {/* Actions */}
                <div className="mt-8 flex justify-end gap-3">


                    <button
                        onClick={() => onEdit(event)}
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                    >
                        <FaEdit />

                        Edit

                    </button>



                    <button
                        onClick={() => onDelete(event._id)}
                        className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
                    >
                        <FaTrash />

                        Delete

                    </button>


                </div>



            </div>


        </div>
    );
}