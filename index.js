var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newcart = []
  newcart['itemName'] = item;
  newcard['itemPrice'] = Math.floor(Math.random() * 100)
  cart.push(newcart);
  return `${item} has been added to your cart.`
}

function viewCart() {

}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
