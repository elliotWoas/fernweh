import React, { useState } from "react";
import MenuHeader from "./components/MenuHeader";
import CategoryTabs from "./components/CategoryTabs";
import NoticeBar from "./components/NoticeBar";
import MenuItemCard from "./components/MenuItemCard";
import MenuItemModal from "./components/MenuItemModal";
import { menuItems } from "./data/menuItems";
import "./index.css";

type MenuItem = typeof menuItems[number];

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("صبحانه");

  return (                    
    <div className="bg-gray-50 font-sans rtl" dir="rtl">
      {/* Normal header - not sticky */}
      <MenuHeader />
      
      {/* Only CategoryTabs will be sticky */}
      <div className="sticky-tabs">
        <CategoryTabs onCategorySelect={setSelectedCategory} />
      </div>
      
      {/* Normal content flow */}
      <div className="max-w-md mx-auto px-2">
        <NoticeBar selectedCategory={selectedCategory} />
        <div className="flex flex-col gap-4 mt-2">
          {menuItems.map((item, idx) => (
            <div key={idx} id={item.elementId}>
              <MenuItemCard
                {...item}
                onClick={() => {
                  setSelectedItem(item);
                  setModalOpen(true);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <MenuItemModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        item={selectedItem}
      />
    </div>
  );
}

export default App;
