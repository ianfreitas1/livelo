const formatResponse = response => {
  const data = response.data;

  const price = data.filters.price;
  const origin = data.filters.routes[0].airports[0].location.name;
  const destination =
    data.resultsList[0].segments[0].arrivalAirport.location.name;

  return {
    origin,
    destination,
    minPrice: price.minPrice,
    minPriceWithTax: price.minPriceWithTax,
  };
};

module.exports = formatResponse;
