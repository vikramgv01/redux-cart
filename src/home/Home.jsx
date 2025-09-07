

import React from "react";
import Card
// ✅ Products Array
const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: "$59.99",
    img: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: "$99.99",
    img: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    title: "Gaming Mouse",
    price: "$39.99",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: "$79.99",
    img: "https://picsum.photos/300/200?random=4",
  },
  {
    id: 5,
    title: "DSLR Camera",
    price: "$499.99",
    img: "https://picsum.photos/300/200?random=5",
  },
  {
    id: 6,
    title: "Laptop Backpack",
    price: "$29.99",
    img: "https://picsum.photos/300/200?random=6",
  },
];

// ✅ Component
const Home = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Shopping Cards</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
