import api from "./api";

/**
 * Get Event Page
 */
export const getEvents = () => {
  return api.get("/event");
};

/**
 * Create Event
 */
export const createEvent = (data) => {
  return api.post("/event/item", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Update Event
 */
export const updateEvent = (id, data) => {
  return api.put(`/event/item/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Delete Event
 */
export const deleteEvent = (id) => {
  return api.delete(`/event/item/${id}`);
};

/**
 * Update Event Header
 */
export const updateEventHeader = (data) => {
  return api.put("/event/header", data);
};

export const getEventBySlug = (slug) => {
    return api.get(`/event/${slug}`);
};