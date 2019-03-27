const prompt = require('prompt');
const Checkout = require('./Checkout');
const PricingRules = require('./PricingRules');

prompt.start();

console.log("Puts items to buy: ");
prompt.get(['items'], (err, input) => {
    const goods = input.items;
    const checkout = new Checkout(new PricingRules());
    goods.split('').forEach(item => { checkout.scan(item) })
    console.log(`Total price: ${checkout.total()}`);
});
