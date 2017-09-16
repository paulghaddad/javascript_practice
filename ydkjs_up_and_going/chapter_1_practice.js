const PHONE_PRICE = 10;
const ACCESSORY_PRICE = 1;
const SPENDING_THRESHOLD = 90.0;
const TAX_RATE = 0.08;

var bankAccountBalance = 100.0;
var totalPurchaseCost = 0;

function priceWithTax(price, TAX_RATE) {
  return price + (price * TAX_RATE);
}

function canPurchase(price, funds) {
  return price < funds;
}

while (totalPurchaseCost < bankAccountBalance) {
  totalPurchaseCost += PHONE_PRICE;

  if (totalPurchaseCost < SPENDING_THRESHOLD) {
    totalPurchaseCost += ACCESSORY_PRICE;
  }
}

totalCostWithTax = priceWithTax(totalPurchaseCost, TAX_RATE);

console.log(`Total Cost: $${totalCostWithTax.toFixed(2)}`);

console.log(`Able to purchase? ${canPurchase(totalCostWithTax, bankAccountBalance)}`);
