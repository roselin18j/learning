import { useEffect, useState } from "react";
import {
    getEvents,
    deleteEvent,
} from "../../../services/events.service";

import EventCard from "./EventCard";
import EventForm from "./EventForm";

export default function Events() {


    const [events, setEvents] = useState([]);

    const [loading, setLoading] = useState(true);

    const [selectedEvent, setSelectedEvent] = useState(null);



    useEffect(() => {

        fetchEvents();

    }, []);



    const fetchEvents = async () => {

        try {

            const response = await getEvents();


            setEvents(
                response.data.data.eventSection.events
            );


        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };



    const handleEdit = (event) => {

        setSelectedEvent(event);

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    };



    const handleDelete = async(id)=>{


        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this event?"
            );


        if(!confirmDelete) return;


        try {


            await deleteEvent(id);


            alert(
                "Event deleted successfully"
            );


            fetchEvents();


        } catch(error){


            console.error(error);


            alert(
                error.response?.data?.message ||
                "Failed to delete event"
            );

        }

    };



    if(loading){

        return (
            <p>
                Loading...
            </p>
        );

    }



    return (

        <div>


            <div className="mb-8">

                <h1 className="text-4xl font-bold">
                    Event Management
                </h1>


                <p className="mt-2 text-gray-500">
                    Add, update and manage homepage events.
                </p>


            </div>



            {/* ADD / UPDATE FORM */}

            <div className="mb-10 rounded-xl border bg-white p-6 shadow-sm">


                <h2 className="mb-6 text-2xl font-semibold">

                    {
                        selectedEvent
                        ?
                        "Update Event"
                        :
                        "Add New Event"
                    }

                </h2>



                <EventForm

                    event={selectedEvent}

                    onSuccess={()=>{

                        fetchEvents();

                        setSelectedEvent(null);

                    }}

                />


            </div>




            {/* EVENTS LIST */}


            {
                events.length === 0 ?


                (

                    <div className="rounded-xl border bg-white p-10 text-center">


                        <h2 className="text-2xl font-semibold">

                            No Events Found

                        </h2>


                        <p className="mt-3 text-gray-500">

                            Create your first event.

                        </p>


                    </div>

                )


                :


                (

                    <div className="grid gap-6">


                        {
                            events.map((event)=>(


                                <EventCard

                                    key={event._id}

                                    event={event}

                                    onEdit={handleEdit}

                                    onDelete={handleDelete}

                                />


                            ))
                        }


                    </div>

                )

            }


        </div>

    );

}