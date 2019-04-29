var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)}
 cart.push(itemObj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(getCart().length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var string = "In your cart, you have";
    for(let i = 0; i < getCart().length; i++) {
      if(i < getCart().length - 1) {
        string += ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`;
      } else if(getCart().length === 1) {
        string += ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
      }
      else {
        string += ` and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
      }
    } 
  }return string;
}

function total() {
  let totalPrice = 0;
  for(let i = 0; i < getCart().length; i++) {
    totalPrice+= getCart()[i].itemPrice;
  } return totalPrice;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
