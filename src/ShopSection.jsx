// import React from 'react';
// import whiteDress from './Images/whitedress.avif';
import menJuta from './Images/menJuta.webp';
import menBlack from './Images/menBlack.webp';
import electronics from './Images/Electronics.jpg';
import sports from './Images/Sports.jpg';
import homeDecor from './Images/HomeDecor.webp';
import kitchen from './Images/kitchen.jpeg';
import beauty from './Images/beauty.jpeg';

const ShopSection = () => {
  return (
    <div className="shop-section">
      {/* First Row */}
      <div className="box1 common">
        <div className="box-content">
          <h2>Upto 60% off | Styles for women</h2>
         
          <img src='src/Images/Sports.jpg' alt='Sports Items' />
          <p>See more</p>
        </div>
      </div>

      <div className="box2 common">
        <div className="box-content">
          <h2>Shoes & Footwears</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(${menJuta})` }}
          ></div>
          <p>See more</p>
        </div>
      </div>

      <div className="box3 common">
        <div className="box-content">
          <h2>Discover fashion Trends</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(${menBlack})` }}
          ></div>
          <p>See more</p>
        </div>
      </div>

      <div className="box4 common">
        <div className="box-content">
          <h2>Upto 40% Off | Electronics</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(${electronics})` }}
          ></div>
          <p>See more</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="box1 common">
        <div className="box-content">
          <h2>Sports & Accessories</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(${sports})` }}
          ></div>
          <p>See more</p>
        </div>
      </div>

      <div className="box2 common">
        <div className="box-content">
          <h2>Home Decor & Lightings</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(${homeDecor})` }}
          ></div>
          <p>See more</p>
        </div>
      </div>

      <div className="box3 common">
        <div className="box-content">
          <h2>Kitchen Accessories</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(${kitchen})` }}
          ></div>
          <p>See more</p>
        </div>
      </div>

      <div className="box4 common">
        <div className="box-content">
          <h2>Beauty Products</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(${beauty})` }}
          ></div>
          <p>See more</p>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
