export function getProduct(productId) {
  let matchingProduct;
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
    
    return matchingProduct
}

export const products = [{
  id: "shirt22389",
  image:"assets/bracelet-2.jpg",
  name: "G'day shirt",
  rating: {
      stars: 4,
      count: 127
  },
  priceCents: 5050,
  keywords: ["shirt", "G'day"]
}, {
  id: "shirt39889",
  image:"assets/bracelet-3.jpg",
  name: "Australia shirt",
  rating: {
      stars: 5,
      count: 80
  },
  priceCents: 4550,
  keywords: ["shirt", "G'day"]
}, {
  id: "455767",
  image:"assets/bracelet-4.jpg",
  name: "Adelaide shirt",
  rating: {
      stars: 5,
      count: 80
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}, {
  id: "45576799909",
  image:"assets/bracelet-5.jpg",
  name: "You Beuaty",
  rating: {
      stars: 5,
      count: 80
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}, { 
  id: "45576799909",
  image:"assets/bracelet-5.jpg",
  name: "You Beuaty",
  rating: {
      stars: 5,
      count: 80
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}, { 
  id: "45576799909",
  image:"assets/bracelet-6.jpg",
  name: "You Beuaty",
  rating: {
      stars: 5,
      count: 80
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}
]
