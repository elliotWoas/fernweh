import starter from "../assets/icons/starter.webp"
import salad from "../assets/icons/salad.webp"
import cafe from "../assets/icons/cafe.webp"
import pasta from "../assets/icons/pasta.webp"
import breakfast from "../assets/icons/breakfast.webp"
import pizza from "../assets/icons/pizza.webp"
import React, { useState } from "react";

const categories = [
  { icon: pasta, label: "پاستا" },
  { icon: starter, label: "پیش غذا" },
  { icon: pizza, label: "پیتزا" },
  { icon: salad, label: "سالاد" },
  { icon: cafe, label: "قهوه", notice: "از ۹ صبح تا ۱۲ ظهر سرو می‌شود" },
  { icon: breakfast, label: "صبحانه", notice: "از 9 صبح تا 12 ظهر سرو می‌شود" },
];

const CategoryTabs: React.FC = () => {
  const [selected, setSelected] = useState(" ");

  return (
    <>
      <div className="overflow-x-auto  px-4 pt-3 pb-2 scrollbar-hide ">
        <div className="flex gap-3 w-full  max-w-md mx-auto px-2 flex-nowrap rtl flex-row-reverse scroll-smooth snap-x snap-mandatory" >
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelected(cat.label)}
              className={`flex flex-col items-center justify-center rounded-xl min-w-[80px] px-4 py-2 snap-start transition-all shadow
                ${selected === cat.label
                  ? "bg-red-500 text-black border border-red-500"
                  : "bg-white text-black border border-gray-200 hover:shadow-md"
                }`}
            >
              <img src={cat.icon} alt={cat.label} className="w-10 h-10 mb-2" />
              <span className="text-sm font-semibold whitespace-nowrap">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Optional: Notice bar below selected tab */ }
      {categories.find(c => c.label === selected)?.notice && (
        <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg px-4 py-2 flex mt-2 mx-2 items-center gap-2 my-2 rtl">
          <div className="flex gap-1 items-center rtl ">
            <img
              src={categories.find(c => c.label === selected)?.icon}
              alt={selected}
              className="w-8 h-8"
            />
            <span className="text-lg">{selected}</span>
            <span className="text-lx">- {categories.find(c => c.label === selected)?.notice}</span>
          </div>
        </div>
      )}
    </>
  );
};
export default CategoryTabs;