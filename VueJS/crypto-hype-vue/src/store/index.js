import Vue from 'vue';
import Vuex from 'vuex';
import crypto from './modules/crypto';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    crypto: crypto,
  },
});
