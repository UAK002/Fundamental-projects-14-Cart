export const getTotals = (cart) => {
  console.log(cart.values());
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
    console.log(totalAmount, totalCost);
  }
  return { totalAmount, totalCost };
};
