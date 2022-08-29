import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://vue-fake-server.herokuapp.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getCars = async () => {
  const response = await apiClient.get("/cardata");
  return response.data;
};

const getCar = async (id) => {
  const response = await apiClient.get(`/cardata/${id}`);
  return response.data;
};

const createCar = async (car) => {
  const response = await apiClient.post("/cardata", car);
  return response.data;
};

const updateCar = async (car) => {
  const response = await apiClient.put(`/cardata/${car.id}`, car);
  return response.data;
};

const deleteCar = async (id) => {
  const response = await apiClient.delete(`/cardata/${id}`);
  return response.data;
};

export default { getCars, getCar, createCar, updateCar, deleteCar };
