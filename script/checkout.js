import { calculateQuantity, cart, removeFromCart, updateQuantity, updateDeliveryOption } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"
import { deliveryOptions } from "../data/deliveryOptions.js";


function renderOrderSummary() {
  console.log(dayjs)

  let cartSummaryHTML = ""
  
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
  
    let matchingProduct;
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
  
  
    // change delivery option heading 
    const deliveryOptionId = cartItem.deliveryOptionId
    let deliveryOption;
    deliveryOptions.forEach((option) => {
      if(option.id === deliveryOptionId) {
        deliveryOption = option
      }
    })
  
    const today = dayjs()
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
    const dateString = deliveryDate.format('dddd, MMMM D')
  
    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
              <div class="delivery-date capitalized text-gold">
                Delivery Date: ${dateString}
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
                      <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                      <span class="update-quantity-link text-dark js-update-link" data-product-id="${matchingProduct.id}">update</span>
  
                      <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                      <span class="save-quantity-link js-save-link" data-product-id="${matchingProduct.id}">Save</span>
  
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
                  ${deliveryOptionHTML(matchingProduct, cartItem)}
                  
                </div>
              </div>
            </div>
      `;
  });
  
  function deliveryOptionHTML(matchingProduct,cartItem) {
  
    let html = ''
    
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs()
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days")
      const dateString = deliveryDate.format("dddd, MMMM D")
      const priceString = deliveryOption.priceCents === 0
      ? 'FREE'
      : `$${formatCurrency(deliveryOption.priceCents)} - `
      
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId
      
  
    html += `
      <div class="delivery-option flex js-delivery-option"
      data-product-id="${matchingProduct.id}"
      data-delivery-option-id="${deliveryOption.id}">
        <input
          class="delivery-option-input"
          type="radio" 
          ${isChecked ? 'checked' : ''}
          name="delivery-option-${matchingProduct.id}"/>
        <div>
          <div class="delivery-option-date capitalized text-gold">
            ${dateString}
          </div>
          <div class="delivery-option-price">${priceString} shipping</div>
        </div>
      </div>
    `
  
    })
    return html
  }
  
  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
  
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
  
      container.remove();
      
      updateCartQuantity()
    });
  });
  
  function updateCartQuantity() {
      const cartQuantity = calculateQuantity()
      document.querySelector(".js-return-to-home-link").innerHTML = `${cartQuantity} items`
  }
  
  updateCartQuantity()
  
  document.querySelectorAll(".js-update-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId
      const container = document.querySelector(`.js-cart-item-container-${productId}`)
      container.classList.add("is-editing-quantity")
    })
  })
  
  // save button
  document.querySelectorAll(".js-save-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId
      console.log(productId)
  
      const container = document.querySelector(`.js-cart-item-container-${productId}`)
      container.classList.remove("is-editing-quantity")
  
      const quantityInput = document.querySelector(`.js-quantity-input-${productId}`)
      const newQuantity = Number(quantityInput.value)
      
      let quantityLabel = document.querySelector(`.js-quantity-label-${productId}`)
      quantityLabel.innerHTML = newQuantity
  
      updateQuantity(productId, newQuantity)
  
      // updating quantity on cart
      updateCartQuantity()
  
    })
  })
  
  document.querySelectorAll(".js-delivery-option")
  .forEach((element) => {
    element.addEventListener("click", () => {
      // const {productId, deliveryOptionId} = element.dataset
      const productId = element.dataset.productId
      const deliveryOptionId = element.dataset.deliveryOptionId
      console.log(deliveryOptionId)
      updateDeliveryOption(productId, deliveryOptionId)
      renderOrderSummary()
    })
  })
}

renderOrderSummary()