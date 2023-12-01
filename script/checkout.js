import { calculateQuantity, cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = ""

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${
      matchingProduct.id
    }">
            <div class="delivery-date capitalized text-gold">
              Delivery Date: Tuesday, june 20
            </div>

            <div class="cart-item-details-grid">
              <img class="product-img"
                src="${matchingProduct.image}"
                alt=""
              />
              
              <div class="cart-item-details">
                <div class="product-name capitalized">${
                  matchingProduct.name
                }</div>
                <div class="product-price">${formatCurrency(
                  matchingProduct.priceCents
                )}</div>
                <div class="product-quantity">
                  <span class="text-gold capitalized">
                    quantity:
                    <span class="quantity-label">${cartItem.quantity}</span>
                    <span class="update-quantity-link text-dark">update</span>
                    <span class="delete-quantity-link text-dark js-delete-link" data-product-id="${
                      matchingProduct.id
                    }">delete</span>
                  </span>
                </div>
              </div>

              <!-- choose delivery option -->
              <div class="delivery-options">
                <div class="delivery-option-title capitalized">
                  choose a delivery option:
                </div>

                <!-- first delivery option -->
                <div class="delivery-option flex">
                  <input
                    class="delivery-option-input"
                    type="radio" checked 
                    name="delivery-option-${matchingProduct.id}"
                  />
                  <div>
                    <div class="delivery-option-date capitalized text-gold">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">Free shipping</div>
                  </div>
                </div>
                <!-- second delivery option -->
                <div class="delivery-option flex">
                  <input
                    class="delivery-option-input"
                    type="radio"
                    name="delivery-option-${matchingProduct.id}"
                  />
                  <div>
                    <div class="delivery-option-date capitalized text-gold">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">Free shipping</div>
                  </div>
                </div>
                <!-- 3rd delivery option -->
                <div class="delivery-option flex">
                  <input
                    class="delivery-option-input"
                    type="radio"
                    name="delivery-option-${matchingProduct.id}"
                  />
                  <div>
                    <div class="delivery-option-date capitalized text-gold">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">Free shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );

    container.remove();
  });
});

function updateCartQuantity() {
    const cartQuantity = calculateQuantity()
    document.querySelector(".js-return-to-home-link").innerHTML = `${cartQuantity} items`
}

updateCartQuantity()
