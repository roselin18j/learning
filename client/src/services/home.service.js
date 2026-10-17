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
  api.put(`/home/hero/slides/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteHeroSlide = (id) =>
  api.delete(`/home/hero/slides/${id}`);

export const getAbout = () =>
  api.get("/home/about");

export const updateAbout = (data) =>
  api.put("/home/about", data);

// Homepage Services Section
export const getHomeServicesSection = () =>
  
  api.get("/home/services");

export const updateHomeServicesSection = (data) =>
  api.put("/home/services", data);