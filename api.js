const axios = require('axios');

const api = axios.create({
  baseURL: 'https://apis.pontoslivelo.com.br/catalog/v2/flights',
  params: {
    passengersCategory: 'ADULT',
    seatClass: 'ECONOMY_CLASS',
    itemsPerPage: '10',
    pageNumber: '1',
    sortBy: 'price%7CASC',
    isInternational: 'true',
    partnersCode: 'CVC',
  },
});

module.exports = api;
