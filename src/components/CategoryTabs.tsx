import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import starter from "../assets/icons/starter.webp";
import salad from "../assets/icons/salad.webp";
import cafe from "../assets/icons/cafe.webp";
import breakfast from "../assets/icons/breakfast.webp";
import pizza from "../assets/icons/pizza.webp";

const categories = [
  { icon: starter, label: "پیش غذا" },
  { icon: pizza, label: "پیتزا" },
  { icon: salad, label: "سالاد" },
  { icon: starter, label: "پیش غذا" },
  { icon: pizza, label: "پیتزا" },
  { icon: salad, label: "سالاد" },
  { icon: cafe, label: "قهوه", notice: "از ۹ صبح تا ۱۲ ظهر سرو می‌شود" },
  { icon: breakfast, label: "صبحانه", notice: "از 9 صبح تا 12 ظهر سرو می‌شود" },
];

const CategoryTabs: React.FC = () => {
  const [selected, setSelected] = useState("صبحانه");

  return (
    <>
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
                onClick={() => setSelected(cat.label)}
                className={`flex flex-col items-center justify-center rounded-xl min-w-[80px] px-4 py-2 transition-all shadow
                  ${selected === cat.label
                    ? "bg-red-500 text-red-600 border border-red-500"
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
        <div className=" bg-red-100  border border-red-500 text-red-700 rounded-lg  px-4 py-2 flex mt-2 mx-2  items-center gap-2 rtl my-2">
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
    </>
  );
};

export default CategoryTabs;