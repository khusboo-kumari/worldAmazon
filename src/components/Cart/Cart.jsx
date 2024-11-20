import React, { useContext, useState } from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";
import { CartContext } from "../../App";
import downChevron from "../../assets/down-chevrin.svg";
import prime from "../../assets/prime.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const Cart = () => {
  const [EMI, setEMI] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart.cart);
  const totalPrice = useSelector((state)=>state.cart.totalPrice);
  let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
  const widthPercentage = Math.floor(Math.min((totalPrice / 499) * 100, 100));
  console.log(widthPercentage);

  return (
    <div className="cart--container ">
      <div className="products">
        <h3 className="cart-heading">Shopping Cart</h3>
        <hr />

        <div className="product-container">
          {cartItem.length > 0 ? (
            cartItem.map((product) => (
              <CartProduct data={product} key={product.product_id} />
            ))
          ) : (
            <p>No items in cart</p>
          )}
        </div>
      </div>

      <div className="cart-right cart-product-total w-[350px] pb-6 flex flex-col gap-5">
        <div className="cart-product-total w-[350px] p-5 pb-6 flex flex-col gap-5 bg-white">
          <div className="is-free-delivery flex  flex-col gap-4">
          <div className="w-full flex gap-3">
  <div className="w-full flex-1 border-2 border-[#20201e] rounded-full">
    <div className={`h-5 rounded-full transition-all duration-300 bg-[#e5bd3b]`}
    style={{ width: `${widthPercentage}%` }}
    />
  </div>
  <p className="text-sm">₹ 499</p>
</div>
<p className="text-xs text-[#067D62]">
  {totalPrice >= 499
    ? "Your order is eligible for FREE Delivery!"
    : `Add ₹${(499 - totalPrice).toFixed(2)} more for FREE Delivery`}
</p>

{totalPrice >= 499 && (
  <div className="flex gap-4">
    <input
      type="checkbox"
      className="checkbox rounded-full size-4 bg-[#d5b034]"
      checked
    />
    <div className="flex flex-col gap-1">
      <strong className="text-xs">
        Your order is eligible for free delivery
      </strong>
      <p className="text-xs">
        Choose FREE Delivery option at checkout.
      </p>
    </div>
  </div>
)}

            <div className="flex justify-between">
              <p className="text-md">Total Price ({cart.length} items)</p>
              <p className="text-md">
                <strong>₹{totalPrice}</strong>
              </p>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox rounded-full size-4 bg-[#d8ac3b]"
              />
              <p className="text-xs">This order contains a gift</p>
            </div>

            <div className="w-full">
              <button className="w-full bg-[#F7CA00] p-2 rounded-full text-black text-sm">
                Proceed to Checkout
              </button>
            </div>

            <div
              className="flex flex-col gap-2 border-2 border-gray-300 p-2 rounded-lg"
              onClick={() => {
                setEMI(!EMI);
              }}
            >
              <div className="flex items-center gap-2 flex-1">
                <p className="text-sm flex items-center gap-2 flex-1">
                  EMI available
                </p>
                <img
                  src={downChevron}
                  alt="down-chevron"
                  className={`w-4 h-4 ${EMI ? "rotate-180" : ""}`}
                />
              </div>
              {EMI ? (
                <div className="text-sm">
                  Your order qualifies for EMI with valid credit card
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="cart-product-total w-[350px] p-5 pb-6 flex flex-col gap-5 bg-white rounded-lg">
          <div className="flex gap-2">
            <div className="flex flex-start gap-2">
              {/* <div className="left">
                <img src={prime} alt="prime" className="w-32 h-32" />
              </div> */}
              {/* <div className="right flex flex-col gap-2">
                <p className="text-sm font-semibold">
                  Free fast delivery. No order minimum. Exclusive savings. Start
                  your 30-day free trial of Prime.
                </p>
                <button className="border-2 border-[#888C8C] px-4 py-1 rounded-full text-sm text-[#373939] w-32">
                  Join Prime
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="cart-product-total w-[350px] p-5 pb-6 flex flex-col gap-5 bg-white rounded-lg">
          <div className="flex gap-2">
            <div className="flex flex-start gap-2">
              <div className="right flex flex-col gap-2">
                <div className="text-md font-semibold flex flex-col gap-10">
                  {" "}
                  Customers who bought also bought these items from other
                  categories:
                  {[...cart, ...cart, ...cart].slice(0, 3).map((item) => (
                    <CardSuggestion data={item} key={item.product_id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardSuggestion = ({ data }) => {
  const { product_name, img_link, rating, discounted_price } = data;
  return (
    <div className="flex gap-2 max-w-[1140px]">
      <img
        src={img_link}
        alt={product_name}
        className=" h-[100px] aspect-square"
      />
      <div className="flex flex-col gap-2">
        <span className="text-sm max-h-[40px] text-[#2162A1] text-wrap truncate text-ellipsis">
          {product_name}
        </span>
        <p className="text-sm "> ⭐️ {rating}</p>
        <p className="text-sm"> {discounted_price}</p>
        <button
          className="bg-[#FFD812] px-4 py-1 rounded-full text-sm text-[#373939] w-32"
          onClick={() => {
            dispatch(addToCart(data));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
