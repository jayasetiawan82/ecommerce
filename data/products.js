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
  id: "Bracelet22389",
  image:"assets/bracelet-2.jpg",
  name: "Allure Bracelet one",
  rating: {
      stars: 4,
      count: 127
  },
  priceCents: 7000,
  keywords: ["Bracelet", "G'day"]
}, {
  id: "Bracelet39889",
  image:"assets/bracelet-3.jpg",
  name: "Allure Bracelet two",
  rating: {
      stars: 5,
      count: 80
  },
  priceCents: 4550,
  keywords: ["Bracelet", "G'day"]
}, {
  id: "455767",
  image:"assets/Twist-Leather-Bracelet.jpg",
  name: "Allure Bracelet Three",
  rating: {
      stars: 5,
      count: 85
  },
  priceCents: 6050,
  keywords: ["Bracelet", "G'day"]
}, {
  id: "45576799909",
  image:"assets/bracelet-5.jpg",
  name: "Allure Bracelet Four",
  rating: {
      stars: 5,
      count: 30
  },
  priceCents: 9050,
  keywords: ["Bracelet", "G'day"]
}, { 
  id: "45576799909",
  image:"assets/bracelet-4.jpg",
  name: "Allure Bracelet Five",
  rating: {
      stars: 5,
      count: 90
  },
  priceCents: 6050,
  keywords: ["Bracelet", "G'day"]
}, { 
  id: "45576799909",
  image:"assets/bracelet-6.jpg",
  name: "Allure Bracelet Six",
  rating: {
      stars: 5,
      count: 60
  },
  priceCents: 6050,
  keywords: ["Bracelet", "G'day"]
}, { 
  id: "455767999234",
  image:"assets/resilient-band.webp",
  name:"Resilient Band",
  rating: {
      stars: 5,
      count: 95
  },
  priceCents: 6050,
  keywords: ["Bracelet", "G'day"]
}, { 
  id: "455767999234",
  image:"assets/silver-band.jpeg",
  name: "Silver Band",
  rating: {
      stars: 5,
      count: 112
  },
  priceCents: 6050,
  keywords: ["Bracelet", "G'day"]
}, { 
  id: "4557679973434",
  image:"assets/stronger-together.webp",
  name: "Silver Band",
  rating: {
      stars: 5,
      count: 126
  },
  priceCents: 6050,
  keywords: ["Bracelet", "G'day"]
}
]
