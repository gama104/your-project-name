"use client";
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { FaHome, FaUser, FaCog, FaInfo, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        className="md:hidden pt-8 pl-1 fixed top-0 left-0 z-30"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
      <div
        className={`fixed md:static top-0 left-0 w-64 md:w-24 bg-white border-r-4 border-gray-200 text-black flex flex-col items-center z-20 pt-24 h-screen md:h-auto transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
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
    </>
  );
};

export default Sidebar;
