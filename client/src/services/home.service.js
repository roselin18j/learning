import api from "./api";

export const getHome = () => api.get("/home");

export const updateHeroSettings = (data) =>
  api.put("/home/hero/settings", data);

export const createHeroSlide = (formData) =>
  api.post("/home/hero/slide", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateHeroSlide = (id, formData) =>
  api.put(`/home/hero/slide/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteHeroSlide = (id) =>
  api.delete(`/home/hero/slide/${id}`);