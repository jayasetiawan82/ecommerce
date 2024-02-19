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
  name: "Allure Bracelet one",
  rating: {
      stars: 4,
      count: 127
  },
  priceCents: 7000,
  keywords: ["shirt", "G'day"]
}, {
  id: "shirt39889",
  image:"assets/bracelet-3.jpg",
  name: "Allure Bracelet two",
  rating: {
      stars: 5,
      count: 80
  },
  priceCents: 4550,
  keywords: ["shirt", "G'day"]
}, {
  id: "455767",
  image:"assets/Twist-Leather-Bracelet.jpg",
  name: "Allure Bracelet Three",
  rating: {
      stars: 5,
      count: 85
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}, {
  id: "45576799909",
  image:"assets/bracelet-5.jpg",
  name: "Allure Bracelet Four",
  rating: {
      stars: 5,
      count: 30
  },
  priceCents: 9050,
  keywords: ["shirt", "G'day"]
}, { 
  id: "45576799909",
  image:"assets/bracelet-4.jpg",
  name: "Allure Bracelet Five",
  rating: {
      stars: 5,
      count: 90
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}, { 
  id: "45576799909",
  image:"assets/bracelet-6.jpg",
  name: "Allure Bracelet Six",
  rating: {
      stars: 5,
      count: 60
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}
]
