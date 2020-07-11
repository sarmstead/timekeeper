// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_Pb5q26zoWEpGkehixHp4hJiF');

const customer = await stripe.customers.create({
  name: 'jenny rosen',
  email: 'jenny.rosen@example.com',
  description: 'My First Test Customer (created for API docs)',
});

console.log(customer);