const api = require('./api');
const { format, eachDayOfInterval } = require('date-fns');

/**
 *  @param {Date}   dateStart     The initial date to check flights
 *  @param {Date}   dateEnd       The final date to check flights
 *  @param {String} origin        The fligh origin; Ex: 'RIO'
 *  @param {Array}  destinations  All possible destinations; Ex: ['MAD', 'BCN']
 *
 */
const livelo = async function (dateStart, dateEnd, origin, destinations) {
  let result = {};

  const dateRange = eachDayOfInterval({
    start: dateStart,
    end: dateEnd,
  }).map(d => format(d, 'yyyy-MM-dd'));

  for (const date of dateRange) {
    for (const destination of destinations) {
      try {
        const response = await api.get('', {
          params: {
            departureDate: date,
            destination,
            origin,
          },
        });

        const price = response.data.filters.price;
        const originFormatted =
          response.data.filters.routes[0].airports[0].location.name;
        const destinationFormatted =
          response.data.resultsList[0].segments[0].arrivalAirport.location.name;

        if (
          !result[destination] ||
          result[destination].minPrice > price.minWithoutTax
        ) {
          result[destination] = {
            minPrice: price.minWithoutTax,
            minPriceWithTax: price.minWithTax,
            date: date,
            destination: destinationFormatted,
            origin: originFormatted,
          };
        }
      } catch (err) {
        console.error(err);
        return { msg: 'Error getting API data' };
      }
    }
  }

  return result;
};

module.exports = livelo;
