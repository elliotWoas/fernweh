import React from "react";
// import brandLogo from "../assets/FernwehLogo.jpg";
// import phoneIcon from "../assets/phone.svg";
// import cafe from "../assets/icons/cafe.webp";

const MenuHeader: React.FC = () => (
<header className="rtl">
  <section>
    {(
      <>
        {/* Cafe Logo */}
        <div className="absolute w-18 h-18 right-65 mt-[calc(100vw*3/4-84px)] rounded-full border-2 border-white/50 shadow-lg z-20 overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src={"../src/assets/Lamiz-logo.webp"} 
            alt="Cafe Logo" 
          />
        </div>
        
        {/* Background Cover Image */}
        <img 
          className="w-full h-[calc(100vw*4/4)] rounded-2xl object-cover" 
          src={"../src/assets/Shiraz-Inside-Branch-There.webp"} 
          alt="Cafe Cover" 
        />
        
        {/* Glassmorphism Card */}
        <div className="relative z-10 mx-4 -mt-35 rounded-2xl backdrop-blur-xs bg-white/3 bg-opacity-10 border border-white/10 shadow p-4">
          <h1 className="font-medium text-2xl text-white drop-shadow">{" قهوه لمیز "}</h1>
          
          {/* Cafe Description */}
          <p className="mt-2.5 text-lm text-white/90 drop-shadow">{" نیازی به توضیح نیست : ) "}</p>
          
          {/* Cafe Details */}
          <div className="flex mt-3 text-sm justify-between items-center">
            {/* Rating */}
            <div className="flex items-center text-white drop-shadow">
              <span className="material-symbols-rounded text-base mr-1 text-amber-300">star</span>
              <span>{"4.9 (212)"}</span>
            </div>
            
            {/* Delivery Time */}
            <div className="flex items-center text-white drop-shadow">
              <span className="material-symbols-rounded text-base mr-1 text-blue-300">schedule</span>
              <span>{" 5-15 دقیقه "}</span>
            </div>
            
            {/* Status Badge */}
            <div className="py-1 px-4 backdrop-blur-sm bg-green-500/30 rounded-md text-sm text-white border border-green-400/50">
              Open
            </div>
          </div>
        </div>
      </>
    )}
  </section>
</header>
);

export default MenuHeader;

{
  /* <header className="flex flex-row-reverse w-full max-w-md mx-auto px-4 items-center justify-between bg-white border-b border-gray-300 px-4 py-3 rtl"></header> */
}
// {/* Left: phone */}
// <button className="p-1">
//   {/* <img src={cafe} alt="تماس" className="w-6 h-6" /> */}
//   <span className="text-lg text">صدا زدن گارسون</span>
// </button>
// {/* Right: brand “B” */}

// {/* Center: leaf + title */}
// <div className="flex items-center gap-4">
//   <img src={brandLogo} alt="برند" className="w-10 h-10 rounded-full object-cover" />
//   <span className="font-bold text-lg text-gray-800">
//     کافه فنوی
//   </span>
//   <div>
//     <h2 className="text-black pr-10">FNW</h2>
//     {/* <img src={cafe} alt="برند" className="w-6 h-6" /> */}
//   </div>
// </div>
