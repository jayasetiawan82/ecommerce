import { cart, addToCart, calculateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let productHTML = "";

products.forEach((product) => {
  productHTML += `
   <div class="product-container">
                <div class="product-image-container">
                    <img src="${product.image}" alt="">
                </div>

                <div class="flex added-container js-added-to-cart-${
                  product.id
                }">
                <i class="fa-regular fa-circle-check"></i>
                <p>Added</p>
              </div>
                <div class="product-name">
                   ${product.name}
                </div>
                <div class="product-rating-countainer flex">
                    <img class="stars" src="rating/rating-${
                      product.rating.stars * 10
                    }.png" alt="">
                    <div class="product-rating-count link-primary">
                    ${product.rating.count}
                    </div>
                </div>
                <div class="product-price">
                    $${formatCurrency(product.priceCents)}
                </div>
                <div class="product-quantity-container">
                    <select class="js-quantity-selector-${product.id}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div class="product-size-selector">
            </div>
                <button class="add-to-cart-button js-add-to-cart-button capitalized" data-product-id="${
                  product.id
                }">add to cart</button>
            </div>

    `;
});


function updateQuantity() {
  const cartQuantity = calculateQuantity()
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}
updateQuantity()

document.querySelector(".js-product-grid").innerHTML = productHTML;

document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const { productId } = button.dataset;
    addToCart(productId);
    updateQuantity();

    // add message
    const addMessage = document.querySelector(`.js-added-to-cart-${productId}`);

    addMessage.classList.add("added");

    setTimeout(() => {
      addMessage.classList.remove("added");
    }, 2000);
  });
});



//********* main idea of javascript************ */
//1. save the data, 2.generate the HTML, 3. make it interactive

//1. save the data ; information about product, rating, price and img
//create variable to save data.
//array represent a list, object; let us group multiple value together,
//create variable products add property image, name, rating and price list, use {} to create an object
//copy related data for property from HTML ;these call data structure, where we organise the data where it represent list of product in this project

//2. generate the HTML
//loops through the products array using forEach method
//give parameter called product, use template string, then copy product container/element from HTML
//insert value to template string using ${}
// multiply rating * 10 as the file name is on higher number
//divide price by 100 so it shows the cents

//combine HTML together
// for combining the html, create a new variable productHTML and make it equal empty string''
//remove const html and add productHTML+= ; accumulator pattern
//accumulator pattern; we loop through an array, and each time we are adding to the result

//take HTML and put it on the page using DOM
//on html create a new class called js-product-grid
//in js using query selector get the class, using innerHTML assign it to prouctHTML
//delete elements on HTML as we are generating products from JS
//fix price so that it show 2 decimal by using toFixed() method, add () around the calculation first.

//link product.js to html
//delete the products array on this JS file, use file product.js instead
//make sure to put product.js above amazon.js ; order of script matters

//3. make it interactive

//add to cart button
//add js-add-to-cart class to button
//using query selectorALL and forEach,  add event listener to the class
//create a new js file called cart.js, link it to html
//on cart.js create a new variable cart to hold the object arrays
//add data attribute to js-add-to-cart button, ; add product name using data attribute
//on the button function, access data and product name ; we got the product name out
//save product name in a variable productName
//we add productName to the cart

//**********data atribbute********
/*the syntax; have to start with "data-",then give it a name such as data-product-name, have to use "-"
its another HTML attribute, which allow us to attach any information to an element
dataset property give us data that attach to the button*/

// change the quantity by 3 steps;
//1. check if the product is already in the cart
//2. if it is in the cart, increase the quantity.
//3. if it's not in the cart, add it to cart

//1 check the product is alreeady in the cart
//loop throught the cart using forEach, give it a function, and a parameter item
//create an if statement to see if productName is equal to item productName
//save matching item in a variable so we can use it later, named matchingItem, let it undifined
//2. if it is in the cart, increase the quantity by 1
//create an if statemnet, if we did find a matching item, it would be an object which is a thruthy value
//increase item by one using +=
//3. if it's not in the cart, add it to cart
//use the cart.push() that we created earlier, move it to else statement

//use product id to identify product name, as the id is unique to a product
//on product.js all product should have an id
//on amazon.js, change productName to productId
//attach productId to the button
//grab product-id and put it in event listener function conver it to camel case prroductId
//rename variable to productId

// make the cart icon number interactive step by step
// 1. calculate the quantity
// 2. put the quantity on the page

//first we we need to access cart array, we can use cart forEach then add function to it
//pass in parameter item, then create a new variable to hold the value called cartQuantity
//append cart.quantity to the variable
//Put quantity on the page, start by adding class to the HTML element called js-cart-quantity
//grab element from JS file, using innerHTML, assign it to cartQuantity variable

// ******************* module************
//to organise our code better, to avoid naming conflict. we can't have the same variable name
//other benefit of module, the order of our script tag on html doesnt matter anymore

//get variable out of a file
//1. add type="module" attribute on script tag
//2. export; add export variable name = []
//3. import: import{varibale name} from 'filepath';

//import should always be on the top of the file code
//We need to use Live server, open through code editor
// we can also fix naming conflict using 'as'
//e.g import {cart as Mycart} from -----

//organise code by creating function.
//when we have a lot of codes, it's better to split them up and group them in a function so its easier to read
//create a function addToCart and paste in the  the cart.forEach method, passed in parameter productId
//call function on the eventlistener function
//do the same thing with function updateCartQuantity function
//in function rename item parameter to cartItem
//move addToCart function to cart.js, best practice is to group related code together into its own file
//use module to export, and import function. we can import multiple thing in {}

//----------------external library----------
//let us share code, save time and avoid duplicating work
//external code usually has been compressed; no space, 1 letter variable name, the process is called minification
//how it works: we get a code online, we get the src of the code then embaded on html, call the function on JS files.

//on our amazon projet we need to code the shipping dates
//
