/**
 * This file is meant to be where you will complete the utility function below, for performing a conversion of some amount
 * to another currency.
 */

/**
 * TODO:
 * @receives two currency objects, currencyA and currencyB, as well as an integer-amount of cash in currencyA
 * @performs a currency conversion between integer amount of currencyA to an integer amount of currencyB
 * @returns an integer
 */
const convertCurrency = (currencyA, currencyB, amount) => {
  if (currencyA === currencyB) {
    return Math.ceil(amount * 100) / 100;
  }
  if (currencyA.conversionRate === 1 && currencyB.conversionRate !== 1) {
    return Math.ceil(amount * currencyB.conversionRate * 100) / 100;
  }
  if (currencyA.conversionRate !== 1 && currencyB.conversionRate === 1) {
    return Math.ceil(amount / currencyA.conversionRate * 100) / 100;
  }
  if (currencyA.conversionRate !== 1 && currencyB.conversionRate !== 1) {
    return Math.ceil(amount * currencyB.conversionRate *(1/currencyA.conversionRate)* 100) / 100;
  }
  return 0;

}

module.exports = convertCurrency