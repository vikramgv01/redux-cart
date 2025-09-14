import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = () => {
  const { totalCount, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="cart-wrapper flex gap-15">
      <div>
        Cart Items Total Price : ${totalPrice.toFixed(2)}
      </div>
      <div className="relative">
        <FaShoppingCart fontSize={45} />
        <div className="bg-red-500 w-[30px] h-[30px] rounded-full absolute bottom-[25px] left-[30px] flex justify-center items-center text-white text-2xl">
          {totalCount}
        </div>
      </div>
    </div>
  );
};

export default Cart;