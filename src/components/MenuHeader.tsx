import React from "react";
import brandLogo from "../assets/FernwehLogo.jpg";
// import phoneIcon from "../assets/phone.svg";     
import cafe from "../assets/icons/cafe.webp";

const MenuHeader: React.FC = () => (
  <header className="flex flex-row-reverse w-full max-w-md mx-auto px-4 items-center justify-between bg-white border-b border-gray-300 px-4 py-3 rtl">
    {/* Left: phone */}
    <button className="p-1">
      <img src={cafe} alt="تماس" className="w-6 h-6" />
    </button>
    {/* Right: brand “B” */}

    {/* Center: leaf + title */}
    <div className="flex items-center gap-4">
      <img src={brandLogo} alt="برند" className="w-10 h-10 rounded-full object-cover" />
      <span className="font-bold text-lg text-gray-800">
        کافه فنوی
      </span>
      <div>
        <h2 className="text-black pr-10">FNW</h2>
        {/* <img src={cafe} alt="برند" className="w-6 h-6" /> */}
      </div>
    </div>

  </header>
);

export default MenuHeader;

