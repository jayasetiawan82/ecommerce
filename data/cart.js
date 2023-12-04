export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "shirt22389",
      quantity: 2,
      deliveryOptionId: "1"
    },
    {
      productId: "shirt39889",
      quantity: 3,
      deliveryOptionId: "2"
    },
  ];
}

function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // quantity selector
  const jsQuantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const quantity = Number(jsQuantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: '1'
    });
  }

  saveToLocalStorage();
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToLocalStorage();
}


export function calculateQuantity() {
  let cartQuantity = 0
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity
  })
  return cartQuantity
}

// make quantity on the top page interactive
export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem
    }
  })

  matchingItem.quantity = newQuantity
  
  saveToLocalStorage()
}

export function updateDeliveryOption(productId, deliveryOptionId) {

  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem
    }
  })
matchingItem.deliveryOptionId = deliveryOptionId
saveToLocalStorage()
}