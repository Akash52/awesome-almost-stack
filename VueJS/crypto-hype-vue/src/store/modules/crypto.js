import ApiService from '../../services/ApiService';

const state = {
  crypto: [],
  exchangeData: [],
  cryptoLoading: true,
};

const getters = {
  cryptoData: (state) => state.crypto,
  exchangeData: (state) => state.exchangeData,
  cryptoLoading: (state) => state.cryptoLoading,
};

const actions = {
  async fetchCryptoData({ commit }) {
    const response = await ApiService.getCrypto();
    commit('setCrypto', response.data.data);
    commit('setCryptoLoading', false);
  },
  async fetchExchangeData({ commit }) {
    commit('setCryptoLoading', true);
    const response = await ApiService.getExchange();
    commit('setExchange', response.data.data);
    commit('setCryptoLoading', false);
  },
};

const mutations = {
  setCrypto: (state, crypto) => (state.crypto = crypto),
  setCryptoLoading: (state, loading) => (state.cryptoLoading = loading),
  setExchange: (state, exchange) => (state.exchangeData = exchange),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
