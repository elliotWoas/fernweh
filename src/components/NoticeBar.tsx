import React from "react";
import breakfast from '../assets/icons/breakfast.webp'
const NoticeBar: React.FC = () => (
  <div className="bg-red-100 border border-red-400 text-red-700 rounded-lg px-4 py-2 flex items-center gap-2 my-2 rtl  ">
          <img src={breakfast}
        className="w-8 h-8"
      />
    <span>
      <b>صبحانه -</b> از 9 صبح تا 12 ظهر سرو می‌شود
    </span>
  </div>
);

export default NoticeBar;