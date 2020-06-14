const { format, eachDayOfInterval } = require('date-fns');

const getDateRangeArray = (dateStart, dateEnd) => {
  const dateRange = eachDayOfInterval({
    start: dateStart,
    end: dateEnd,
  }).map(d => format(d, 'yyyy-MM-dd'));

  return dateRange;
};

module.exports = getDateRangeArray;
