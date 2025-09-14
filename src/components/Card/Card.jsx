import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice/cartSlice";

const Card = ({ id, title, price, img }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, img }));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 hover:shadow-xl transition">
      <img src={img} alt={title} className="rounded-lg mb-4 w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700 text-lg font-bold mb-3">{price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
