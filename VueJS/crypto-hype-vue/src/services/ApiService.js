import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.coincap.io/v2',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  //make a request to the api & also handle errors

  getCrypto: async () => {
    return await apiClient.get('/assets').catch((error) => {
      console.error(error);
    });
  },
  getExchange: async () => {
    return await apiClient.get('/exchanges').catch((error) => {
      console.error(error);
    });
  },
};
