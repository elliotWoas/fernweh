import React, { useState } from "react";

interface MenuItemModalProps {
  open: boolean;
  onClose: () => void;
  item: {
    image: string;
    title: string;
    desc: string;
    price: string;
    icon?: string;
    elementId?: string;
  } | null;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({ open, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);
  
  if (!open || !item) return null;
  
  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => Math.max(1, prev - 1));
  
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto p-4 rtl animate-fadeInUp">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 text-2xl hover:text-gray-600"
          onClick={onClose}
          aria-label="بستن"
        >
          ×
        </button>
        
        {/* Item image and title and description */}
        <div className="flex flex-col items-center mb-4">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-48 h-48 object-cover rounded-xl mb-2" 
          />
         <div className="text-xl font-bold text-right w-full">
           <h3 className="flex-1 text-right ">{item.title}{item.icon && <span className="text-2xl">{item.icon}</span>}</h3>
           
           <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
           </div>
        </div>
        
        {/* Price and quantity section */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500">مجموع</span>
            <span className="font-bold text-lg">{item.price} تومان</span>
          </div>
          
          {/* Quantity selector */}
          <div className="flex items-center gap-2">
            <button
              className="bg-white border rounded-lg w-8 h-8 flex items-center justify-center text-xl font-bold"
              onClick={handleIncrease}
              aria-label="افزایش"
            >
              +
            </button>
            <span className="w-8 text-center font-bold">{quantity}</span>
            <button
              className="bg-white border rounded-lg w-8 h-8 flex items-center justify-center text-xl font-bold"
              onClick={handleDecrease}
              aria-label="کاهش"
            >
              -
            </button>
          </div>
          
          {/* Add to cart button */}
          <button 
            className="!bg-red-500 text-white rounded-lg px-5 py-2 font-semibold hover:bg-red-600"
            onClick={() => {
              console.log(`Added ${quantity} of ${item.title} to cart`);
              onClose();
            }}
          >
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemModal;