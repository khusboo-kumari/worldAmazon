import "./Home.css";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cartSlice";
import { CartContext } from "../../App";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart.cart);
  const product = cart.find((item) => item.product_id === data.product_id);
  const currentQuantity = product ? product.quantity : 0;

  return (
    <div className="product-img-container">
      <img src={data.img_link} alt={data.product_id} className="product-img" />
      {currentQuantity ? (
        <>
            <div className="product-btns">
              <button className="product-btn" onClick={()=>dispatch(addToCart(data))}> + </button> {""}
              <button className="product-btn" onClick={()=>dispatch(removeFromCart(data))}> - </button>
            </div>
        </>
      ) : (<button className="product-btn" onClick={()=>dispatch(addToCart(data))}> Add to Cart </button>)}
    </div>
  );
};

export default ProductCard;
