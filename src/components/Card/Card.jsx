import React from "react";

const Card = ({ title, price, img }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 hover:shadow-xl transition">
      {/* Product Image */}
      <img
        src={img}
        alt={title}
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />

      {/* Product Details */}
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700 text-lg font-bold mb-3">{price}</p>

      {/* Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full">
        Add to Cart
      </button>
    </div>
  );
};

