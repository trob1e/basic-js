const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason( date ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!date) return 'Unable to determine the time of year!';

  //console.log(date);

  try {date.getTime()}
  catch {
    throw new Error('Invalid date!');
  }

  let arrSeason = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  try {
    let arrSeason = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
    return arrSeason[date.getMonth()];
  } catch {
    throw new Error('Invalid date!');
  }

}

module.exports = {
  getSeason
};
