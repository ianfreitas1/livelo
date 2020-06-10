# @ianfreitas1/livelo

Returns information from Livelo's api within a specified date range and destinations.

## Installation

```
npm install @ianfreitas1/livelo
```

## Usage

```js
const livelo = require('@ianfreitas1/livelo');

const dateStart = new Date(2021, 0, 25);
const dateEnd = new Date(2021, 0, 29);
const origin = 'RIO';
const destinations = ['OPO', 'BCN'];

(async () => {
  const response = await livelo(dateStart, dateEnd, origin, destinations);

  console.log(response);
})();
//=> {
//   OPO: {
//     minPrice: 72500,
//     minPriceWithTax: 79700,
//     date: '2021-01-25',
//     destination: 'Porto',
//     origin: 'Rio de Janeiro'
//   },
//   BCN: {
//     minPrice: 86000,
//     minPriceWithTax: 94000,
//     date: '2021-01-29',
//     destination: 'Barcelona',
//     origin: 'Rio de Janeiro'
//   }
// }
```
