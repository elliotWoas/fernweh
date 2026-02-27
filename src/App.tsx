import { useEffect, useState } from "react";
import MenuHeader from "./components/MenuHeader";
import CategoryTabs from "./components/CategoryTabs";
import NoticeBar from "./components/NoticeBar";
import MenuItemCard from "./components/MenuItemCard";
import MenuItemModal from "./components/MenuItemModal";
import AuthModal from "./components/AuthModal";
import { menuItems } from "./data/menuItems";
import "./index.css";

type MenuItem = typeof menuItems[number];
type AuthUser = { name: string; email: string };
const CURRENT_USER_KEY = "fernweh_current_user";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("صبحانه");
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const rawUser = localStorage.getItem(CURRENT_USER_KEY);
    if (!rawUser) return;
    try {
      setCurrentUser(JSON.parse(rawUser) as AuthUser);
    } catch {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, []);

  const handleAuthSuccess = (user: AuthUser) => {
    setCurrentUser(user);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (                    
    <div className="bg-gray-50 font-sans rtl" dir="rtl">
      {/* Normal header - not sticky */}
      <MenuHeader
        currentUser={currentUser}
        onLoginClick={() => setAuthModalOpen(true)}
        onLogout={handleLogout}
      />
      
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

      <AuthModal
        open={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default App;
