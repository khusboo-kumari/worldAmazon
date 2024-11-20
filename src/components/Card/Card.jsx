import React from "react";
import "./card.css";
import HomeStorage from "./../../assets/HomeStorage.jpg";
// import HomeDecor from "./../../assets/HomeDecor.jpg";
import CleaningTool from "./../../assets/CleaningTool.jpg";


const Card = () => {
  return (
    <div className="card-container">
      <h1 className="card-heading">Shop for your home essentials</h1>
      <div className="card-item-container">
        <div className="card-img-container">
          <img src= "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" alt="Bedding" className="card-img"/>
          <p className="card-title">Bedding</p>
        </div>

        <div className="card-img-container">
          <img src= "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" alt="HomeDecor" className="card-img"/>
          <p className="card-title">HomeDecor</p>
        </div>

        <div className="card-img-container">
          <img src="https://m.media-amazon.com/images/I/71He-hscFaL._SX679_.jpg" alt="HomeStorage" className="card-img"/>
          <p className="card-title">HomeStorage</p>
        </div>

        <div className="card-img-container">
          <img src="https://m.media-amazon.com/images/I/511jsE2a9PL._AC_UL320_.jpg" alt="CleaningTool" className="card-img"/>
          <p className="card-title">CleaningTool</p>
        </div>
      </div>
      <a href="" className="more-options">Discover more in Home</a>
    </div>
  );
};

export default Card;