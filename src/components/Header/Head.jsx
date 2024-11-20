import {useContext, useState} from 'react' ;
import "./Head.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import AmazonLogo from "./../../assets/amazon_logo.png";
import { Link } from "react-router-dom";
import { CartContext } from '../../App';
import { useSelector } from 'react-redux';

const Head = () => {
  const cart = useSelector((state)=>state.cart.cart);
  return (
    <div className="amazon-header">
      {/*  Amazon Logo */}
      <Link className="header-logo" to={"/"}>
        <img
          className="amazon-branding-logo"
          src={AmazonLogo}
          alt="amazon-logo"
        />
      </Link>

      {/* Location Box  */}
      <div className="header-location-container">
        <div className="order-location-container">
          {/* <img className="location-icon" src="" alt="location-icon" /> */}
          <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
          <div className="location-text-container">
            <span className="current-location">
              Deliver to
            </span>
            <span className="update-location">India</span>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="search-bar">
        <select className="search-filter">
          <option value={"all"}>All</option>
          <option value={"electronics"}>Electronics</option>
          <option value={"fashion"}>Fashion</option>
          <option value={"home"}>Home</option>
          <option value={"grocery"}>Grocery</option>
        </select>

        <input className="search-input"
          type="search"
          placeholder="Search Amazon.in"
        />

        <button className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {/* Language Select */}
      <div className="right-header">
        <div className="header-container">
          <select className="language-select">
            <option value={"en"}>🏳️‍⚧️EN</option>
            <option value={"hi"}>🇮🇳 HI</option>
          </select>
        </div>

        {/* Account Menu */}

        <div className="header-container">
          <div className="account-menu">
            <span className="account-name">Hello, Dytto</span>
            <select className="account-select">
              <option value={"account"}>Account & Lists</option>
              <option value={"orders"}>Orders</option>
              <option value={"prime"}>Try Prime</option>
            </select>
          </div>
        </div>

        {/* Return & Order Button */}

        <div className="header-container">
          <button className="returns-orders">
            <span className="returns-pretext">Returns</span>
            <span className="returns-maintext">& Orders</span>
          </button>
        </div>

        {/* Cart */}

        <div className="header-container">
          <Link className="cart-container" to={"/cart"}>
            <div className="cart-icon-container">
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
              <span className="cart-count">{cart.length}</span>
            </div>
            <span className="cart-text">Cart</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Head;
