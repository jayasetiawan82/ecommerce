export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "shirt22389",
      quantity: 2,
    },
    {
      productId: "shirt39889",
      quantity: 3,
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