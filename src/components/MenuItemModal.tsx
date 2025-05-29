import React, { useState } from "react";

type MenuItemModalProps = {
  open: boolean;
  onClose: () => void;
  item: {
    image: string;
    title: string;
    desc: string;
    price: string;
    icon?: string;
  } | null;
};

const MenuItemModal: React.FC<MenuItemModalProps> = ({ open, onClose, item }) => {
  const [qty, setQty] = useState(1);
  if (!open || !item) return null;
  const priceNum = parseInt(item.price.replace(/,/g, ""));
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-t-2xl shadow-xl w-full max-w-lg mx-auto p-0 pb-6 rtl animate-fadeInUp relative">
        <button
          className="absolute top-3 left-3 text-gray-400 text-2xl hover:text-gray-600"
          onClick={onClose}
          aria-label="بستن"
        >
          ×
        </button>
        <div className="flex flex-row-reverse items-center gap-4 p-5 pb-2">
          <img src={item.image} alt={item.title} className="w-36 h-36 object-cover rounded-xl border" />
          <div className="flex-1 flex flex-col gap-2 items-end">
            <div className="flex items-center gap-2">
              {item.icon && <span className="text-2xl">{item.icon}</span>}
              <span className="font-bold text-xl">{item.title}</span>
            </div>
            <div className="text-gray-500 text-sm text-right w-full whitespace-pre-line leading-6">{item.desc}</div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 gap-2 px-5">
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-400">مجموع</span>
            <span className="font-bold text-xl">{(priceNum * qty).toLocaleString()} تومان</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-100 border rounded-lg w-10 h-10 text-xl font-bold hover:bg-gray-200"
              onClick={() => setQty(q => Math.max(1, q - 1))}
              aria-label="کاهش"
            >
              -
            </button>
            <span className="w-8 text-center font-bold text-lg">{qty}</span>
            <button
              className="bg-gray-100 border rounded-lg w-10 h-10 text-xl font-bold hover:bg-gray-200"
              onClick={() => setQty(q => q + 1)}
              aria-label="افزایش"
            >
              +
            </button>
          </div>
          <button className="bg-red-500 text-white rounded-lg px-7 py-2 font-semibold hover:bg-red-600 text-lg">افزودن</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemModal; 