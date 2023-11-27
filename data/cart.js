export const cart = [
  {
    productId: "shirt22389",
    quantity: 2,
  },
  {
    productId: "shirt39889",
    quantity: 3,
  },
];

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
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  
}
