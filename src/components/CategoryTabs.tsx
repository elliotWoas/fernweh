import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

//icon
import cafe from "../assets/icons/cafe.webp";
import breakfast from "../assets/icons/breakfast.webp";
import tea from "../assets/icons/tea.webp"
import coldDrinks from "../assets/icons/Cold-Coffee-Based-1.svg";
import hotCoffe from "../assets/icons/Hot-Coffee-Based.svg"
import smothiesMocketle from "../assets/icons/smothiesMocktel.png";
import shake from "../assets/icons/shake.png"


const categories = [
  { icon: hotCoffe, label: " نوشیدنی گرم ", notice: ""},
  { icon: cafe, label: " بار گرم ", notice: " یروز یادت بره. اون روز بی حالی  : ) " },
  { icon: coldDrinks, label: " بار سرد ", notice: " تو این گرما میچسبه 🥵 "  },
  { icon: breakfast, label: " خوراک ", notice: "" },
  { icon: tea, label: " چای دمنوش ", notice: ""  },
  { icon: smothiesMocketle, label: " اسموتی موکتل ", notice: " کنارش کوکی هم امتحان کن :)"  },
  { icon: shake, label: " شیک " },
];

interface CategoryTabsProps {
  onCategorySelect: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ onCategorySelect }) => {
  const [selected, setSelected] = useState("");

  const handleCategorySelect = (category: string) => {
    setSelected(category);
    onCategorySelect(category);
    const element = document.getElementById(category);
    if (element) {
      // Get the height of the sticky tabs for offset
      const tabsHeight = document.querySelector('.sticky-tabs')?.getBoundingClientRect().height || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - tabsHeight - 10, // 10px extra padding
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 w-full">
      <div className="px-4 pt-3 rtl">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={"auto"}
          className="!overflow-visible"
          dir="rtl"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.label} className="!w-auto snap-start">
              <button
                onClick={() => handleCategorySelect(cat.label)}
                className={`flex flex-col items-center justify-center rounded-xl min-w-[80px] px-4 py-2 transition-all shadow
                  ${selected === cat.label
                    ? "bg-red-500 text-black border border-red-500"
                    : "bg-white text-black border border-gray-200 hover:shadow-md"
                  }`}
              >
                <img src={cat.icon} alt={cat.label} className="w-10 h-10 mb-2" />
                <span className="text-sm font-semibold whitespace-nowrap">{cat.label}</span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {categories.find(c => c.label === selected)?.notice && (
        <div className="bg-red-100 border border-red-500 text-red-700 rounded-lg px-4 py-2 flex mt-2 mx-2 items-center gap-2 rtl my-2">
          <div className="flex gap-1 items-center">
            <img
              src={categories.find(c => c.label === selected)?.icon}
              alt={selected}
              className="w-8 h-8"
            />
            <span className="text-lg">{selected}</span>
            <span className="text-base">- {categories.find(c => c.label === selected)?.notice}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryTabs;