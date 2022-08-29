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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
