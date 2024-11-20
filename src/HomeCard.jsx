// import React from "react";

export default function HomeCard() {
    const data = {
        title:"Custom Appliances for your home | Up to 55% Off",
        items:[
            {
                image : "https://m.media-amazon.com/images/I/41dtRPYZIAL._MCnd_AC_.jpg",
                title : "Air Conditioner"
            },
            {
                image : "https://m.media-amazon.com/images/I/41dtRPYZIAL._MCnd_AC_.jpg",
                title : "Air Conditioner"
            },
            {
                image : "https://m.media-amazon.com/images/I/41dtRPYZIAL._MCnd_AC_.jpg",
                title : "Air Conditioner"
            },
            {
                image : "https://m.media-amazon.com/images/I/41dtRPYZIAL._MCnd_AC_.jpg",
                title : "Air Conditioner"                
            }
        ],
        redirect: {
            label: "See more",
            url: "https://www.explorin.io" ,
        }
    }

    const fun = () => 5 ; 

  return (
    <div className="home-card">
      <div className="home-card-title">{data.title}</div>
      <div className="home-card-items-container">
       
      </div>
    </div>
  );
}
