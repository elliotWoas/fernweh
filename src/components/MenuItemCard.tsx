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
    <div className="flex flex-row-reverse items-start p-4 gap-4">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1 text-right">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>
    </div>

    {/* Bottom row: price on left, orange button on right */}
    <div className="flex flex-row-reverse items-center justify-between px-4 pb-4">
      <button
        type="button"
        onClick={e => { e.stopPropagation(); onClick && onClick(); }}
        className="
          !bg-orange-500 !hover:bg-orange-600
          text-white
          rounded-lg
          px-4 py-2
          text-sm font-medium
          focus:outline-none
          transition
        "
      >
        افزودن
      </button>
      <span className="text-lg font-semibold text-gray-900">
        {price} <span className="text-xs text-gray-500">تومان</span>
      </span>
    </div>
  </div>
);

export default MenuItemCard;
