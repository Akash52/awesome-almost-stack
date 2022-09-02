import ApiService from "@/services/ApiServices";

const state = {
  cars: [],
  car: {},
  loading: false,
  error: null,
};

const getters = {
  cars: (state) => state.cars,
  car: (state) => state.car,
  loading: (state) => state.loading,
  error: (state) => state.error,
};

const actions = {
  // Get all cars
  async getCars({ commit }) {
    commit("setLoading", true);
    try {
      const cars = await ApiService.getCars();
      commit("setCars", cars);
    } catch (error) {
      commit("setError", error.message);
      throw error;
    } finally {
      commit("setLoading", false);
    }
  },
  // Get car by id
  async getCar({ commit }, id) {
    commit("setLoading", true);
    try {
      const car = await ApiService.getCar(id);
      commit("setCar", car);
    } catch (error) {
      commit("setError", error.message);
      throw error;
    } finally {
      commit("setLoading", false);
    }
  },
  // Create car
  async createCar({ commit }, car) {
    commit("setLoading", true);
    try {
      const newCar = await ApiService.createCar(car);
      commit("addCar", newCar);
    } catch (error) {
      commit("setError", error.message);
      throw error;
    } finally {
      commit("setLoading", false);
    }
  },
  // Delete car
  async deleteCar({ commit }, id) {
    commit("setLoading", true);
    try {
      await ApiService.deleteCar(id);
      commit("removeCar", id);
    } catch (error) {
      commit("setError", error.message);
      throw error;
    } finally {
      commit("setLoading", false);
    }
  },
  // Update car
  async updateCar({ commit }, car) {
    commit("setLoading", true);
    try {
      const updatedCar = await ApiService.updateCar(car);
      commit("updateCar", updatedCar);
    } catch (error) {
      commit("setError", error.message);
      throw error;
    } finally {
      commit("setLoading", false);
    }
  },
};

const mutations = {
  setCars(state, cars) {
    state.cars = cars;
  },
  setCar(state, car) {
    state.car = car;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setError(state, error) {
    state.error = error;
  },
  addCar(state, car) {
    state.cars.push(car);
  },
  removeCar(state, id) {
    state.cars = state.cars.filter((car) => car.id !== id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
