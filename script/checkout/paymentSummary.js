import { cart } from "../../data/cart.js"
import { getProduct } from "../../data/products.js"
import { getDeliveryOptions } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {

    let productPriceCents = 0; 
    let shippingPriceCents = 0

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId)
       productPriceCents += product.priceCents * cartItem.quantity


       const deliveryOption = getDeliveryOptions(cartItem.deliveryOptionId)
       shippingPriceCents  += deliveryOption.priceCents
    }) 
    
    const totalBeforeTax = productPriceCents + shippingPriceCents
    const taxCents = totalBeforeTax * 0.1
    const totalCents = totalBeforeTax + taxCents

    const paymentSummaryHTML = `
    <div class="payment-samurry-title text-green uppercase">
            order summary
          </div>
          <div class="payment-summary-row">
            <div>Items (3)</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>
          <div class="payment-summary-row">
            <div>Shipping and handling</div>
            <div class="payment-summary-money">${formatCurrency(shippingPriceCents)}</div>
          </div>
          <div class="payment-summary-row">
            <div>Total before tax</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
          </div>
          <div class="payment-summary-row">
            <div>Estimated tax(10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>
          <br />
          <div class="payment-summary-row text-gold">
            <div>Order total</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>
          <button class="place-order-button add-to-cart-button">place your order</button>
    
    `

    document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML
}