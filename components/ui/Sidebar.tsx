"use client";
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { FaHome, FaUser, FaCog, FaInfo } from "react-icons/fa";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-24 bg-white border-r-4 border-gray-200 text-black flex flex-col items-center z-20 pt-24 h-screen">
      <SidebarItem
        icon={<FaHome />}
        text="Procurement"
        isActive={activeIndex === 0}
        onClick={() => handleItemClick(0)}
      />
      <SidebarItem
        icon={<FaUser />}
        text="Repository"
        isActive={activeIndex === 1}
        onClick={() => handleItemClick(1)}
      />
      <SidebarItem
        icon={<FaCog />}
        text="Projects"
        isActive={activeIndex === 2}
        onClick={() => handleItemClick(2)}
      />
      <SidebarItem
        icon={<FaInfo />}
        text="Financial"
        isActive={activeIndex === 3}
        onClick={() => handleItemClick(3)}
      />
    </div>
  );
};

export default Sidebar;
