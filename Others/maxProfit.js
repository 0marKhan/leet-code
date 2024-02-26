const maxProfit = (prices) => {
  let left = 0; // Index for buying
  let right = 1; // Index for selling
  let max_profit = 0; // Variable to store the maximum profit found

  // Loop through the prices array
  while (right < prices.length) {
    // Check if the price at 'left' index is less than the price at 'right' index
    if (prices[left] < prices[right]) {
      // Calculate the profit by selling at the 'right' price and buying at the 'left' price
      let profit = prices[right] - prices[left];

      // Update the maximum profit found so far
      max_profit = Math.max(max_profit, profit);
    } else {
      // If the price at 'left' is not less than the price at 'right',
      // update the 'left' index to the current 'right' index
      left = right;
    }
    // Move to the next element in the array
    right++;
  }

  // Return the maximum profit found
  return max_profit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
