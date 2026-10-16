import api from "./api";


export const getServices = () => {
  return api.get("/service");
};

export const createService = (data) => {
  return api.post("/service/item", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// services.service.js

export const updateService = (id, data) => {
    return api.put(`/service/item/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteService = (id) => {
  return api.delete(`/service/item/${id}`);
};