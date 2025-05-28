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

                            {/*min-h-screen*/}
  return (                    
    <div className="overflow-x-hidden bg-gray-50 min-h-screen font-sans rtl" dir="rtl">
      <MenuHeader />
      <CategoryTabs />
      <div className="max-w-md mx-auto px-2">
        <NoticeBar />
        <div className="flex flex-col gap-4 mt-2">
          {menuItems.map((item, idx) => (
            <MenuItemCard
              key={idx}
              {...item}
              onClick={() => {
                setSelectedItem(item);
                setModalOpen(true);
              }}
            />
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
