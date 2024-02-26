/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var max = 0,
    diff;
  for (let i = 0; i < prices.length - 1; i++) {
    // takes the difference between each adjacent index
    diff = prices[i + 1] - prices[i];
    // if selling - buying is +ve add it to the profit
    if (diff > 0) max += diff;
  }
  return max;
};
