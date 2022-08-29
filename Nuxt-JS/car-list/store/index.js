import Vuex from "vuex";
import cars from "./modules/cars";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      cars,
    },
  });
};

export default createStore;
