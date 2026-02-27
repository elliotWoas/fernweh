import React from "react";

type MenuItemCardProps = {
  image: string;
  title: string;
  desc: string;
  price: string;
  onClick?: () => void;
};

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  image,
  title,
  desc,
  price,
  onClick,
}) => (
  <div
    onClick={onClick}
    role="button"
    className="
      bg-white
      rounded-2xl
      border border-gray-300
      shadow-sm hover:shadow-md
      transition
      overflow-hidden
      max-w-[380px] w-full mx-auto
      cursor-pointer
    "
  >
    {/* Top row: image + title */}
    <div className="flex flex-row-reverse items-start p-3 gap-3">
      <img
        src={image}
        alt={title}
        className="w-28 h-28 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1 text-right">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>
    </div>

    {/* Bottom row: price on left, orange button on right */}
    <div className="flex flex-row-reverse items-center justify-between px-3 pb-2">
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClick?.(); }}
        className="
          relative
          w-29
          h-9
          cursor-pointer
          overflow-visible
          bg-black
          px-12 py-6
          text-[1.1rem] font-semibold text-black
          transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
          border-2 border-[#0ff]
          shadow-[0_0_10px_rgba(0,155,255,0.3)]
          rounded-lg
          z-[1]
          before:content-['']
          before:absolute
          before:inset-[-3px]
          before:border-2
          before:border-[#BDBDBD]
          before:rounded-[inherit]
          before:opacity-0
          before:animate-[pulseOut_2s_ease-out_infinite]
          after:content-['']
          after:absolute
          after:inset-[-1px]
          after:border-2
          after:border-[#646666]
          after:rounded-[inherit]
          after:opacity-0
          after:animate-[pulseOut_2s_ease-out_infinite]
          after:[animation-delay:1s]
        "
        // !bg-orange-600 !hover:bg-orange-800
        // text-white
        // rounded-lg
        // px-4 py-2
        // text-sm font-medium
        // focus:outline-none
        // transition
        >
       گارسون
      </button>
      <span className="text-lg font-semibold text-gray-900">
        {price} <span className="text-xs text-gray-500">تومان</span>
      </span>
    </div>
  </div>
);

export default MenuItemCard;
