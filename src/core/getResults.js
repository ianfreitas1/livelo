const getDateRangeArray = require('../utils/getDateRangeArray');
const formatResponse = require('../utils/formatResponse');
const api = require('../api');

/**
 *  @param {Date}   dateStart     The initial date to check flights
 *  @param {Date}   dateEnd       The final date to check flights
 *  @param {String} origin        The fligh origin; Ex: 'RIO'
 *  @param {Array}  destinations  All possible destinations; Ex: ['MAD', 'BCN']
 *
 */
const getResults = async function (dateStart, dateEnd, origin, destinations) {
  const dateArray = getDateRangeArray(dateStart, dateEnd);
  const results = {};

  for (const date of dateArray) {
    for (const destination of destinations) {
      try {
        const response = formatResponse(
          await api.get('', {
            params: {
              departureDate: date,
              destination,
              origin,
            },
          })
        );

        if (
          !results[destination] ||
          results[destination].minPrice > price.minWithoutTax
        ) {
          results[destination] = {
            ...response,
            date,
          };
        }
      } catch (err) {
        console.error(err);
        return {
          msg: 'Error getting API data',
          status_code: err.response.status,
        };
      }
    }
  }
};

module.exports = getResults;
