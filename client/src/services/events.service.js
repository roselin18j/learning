import api from "./api";

export const getEvents = () => {
    return api.get("/event");
};

export const updateEventHeader = (data) => {
    return api.put("/event/header", data);
};

export const createEvent = (data) => {
    return api.post("/event/item", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const updateEvent = (id, data) => {
    return api.put(`/event/item/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteEvent = (id) => {
    return api.delete(`/event/item/${id}`);
};

export const getEventBySlug = (slug) => {
    return api.get(`/event/${slug}`);
};