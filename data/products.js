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
  image:"assets/Twist-Leather-Bracelet.jpg",
  name: "Twist Leather Bracelet",
  rating: {
      stars: 4,
      count: 127
  },
  priceCents: 5050,
  keywords: ["shirt", "G'day"]
}, {
  id: "shirt39889",
  image:"assets/bracelet-2.jpg",
  name: "Leather Cord Bracelet",
  rating: {
      stars: 5,
      count: 30
  },
  priceCents: 4550,
  keywords: ["shirt", "G'day"]
}, {
  id: "455767",
  image:"assets/bracelet-3.jpg",
  name: "Finger Printed Bracelet",
  rating: {
      stars: 5,
      count: 50
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}, {
  id: "45576799909",
  image:"assets/bracelet-4.jpg",
  name: "Circuit Leather Wrap",
  rating: {
      stars: 5,
      count: 89
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}, {
  id: "45576799909",
  image:"assets/bracelet-5.jpg",
  name: "Leather ID Bracelet",
  rating: {
      stars: 5,
      count: 61
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}, {
  id: "45576799909",
  image:"assets/bracelet-6.jpg",
  name: "Box Chain Bracelet",
  rating: {
      stars: 5,
      count: 32
  },
  priceCents: 6050,
  keywords: ["shirt", "G'day"]
}
]
