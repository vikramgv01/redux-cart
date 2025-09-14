import React from "react";
import Card from "../components/Card/Card";
import Cart from "../components/Cart/Cart";
import products from "../data/data";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold flex justify-between mb-8">
        🛒 Shopping Cards
        <Cart />
      </h1>

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
