import React, { useState } from 'react';

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/BAU/Hero/Oct/V1/Modern-wall-clocks-PC-3000x1200._CB542833767_.jpg",
  "https://amazonclonewebapp.netlify.app/assets/bannerImgTwo-0758635c.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Jupiter/KSD/PEA/Updated/Phase3/Phase3b/929711._CB542298789_.png",
   "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg",
];

const Caraousel = () => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="absolute flex justify-center w-full h-screen  scroll-smooth">
      <div 
        className="absolute  top-1/5 left-0 cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent-100" 
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[270px] w-[50px]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      
      <div className="flex w-full justify-center">
        {images.map((item, index) => (
          current === index && (
            <img 
              key={index} 
              src={item} 
              alt="carousel slide" 
              className="w-full h-[90vh] transition duration-200 ease-in-out no-scrollbar object-cover" 
            />
          )
        ))}
      </div>
      
      <div 
        className="absolute top-1/5 right-0 cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent-100" 
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[270px] w-[50px]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Caraousel;