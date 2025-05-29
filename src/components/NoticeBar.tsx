import React from "react";
import breakfast from '../assets/icons/breakfast.webp';
import pizza from '../assets/icons/pizza.webp';

interface NoticeBarProps {
  selectedCategory: string;
}

const NoticeBar: React.FC<NoticeBarProps> = ({ selectedCategory }) => {
  const notices = {
    "صبحانه": {
      icon: breakfast,
      notice: "از 9 صبح تا 12 ظهر سرو می‌شود"
    },
    "پیتزا": {
      icon: pizza,
      notice: "ارسال رایگان برای سفارش‌های بالای 200 هزار تومان"
    }
  };

  const selectedNotice = notices[selectedCategory as keyof typeof notices];

  if (!selectedNotice) return null;

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 rounded-lg mt-2 px-4 py-2 flex items-center gap-2 rtl">
      <img src={selectedNotice.icon} alt={selectedCategory} className="w-8 h-8" />
      <span>
        <b>{selectedCategory} -</b> {selectedNotice.notice}
      </span>
    </div>
  );
};

export default NoticeBar;