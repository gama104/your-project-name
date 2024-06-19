import React, { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col items-center mb-8 ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div
        className={`w-16 h-16 rounded-full bg-gray-300 text-xl flex items-center justify-center hover:bg-orange-400 ${
          isActive ? "bg-orange-400" : ""
        }`}
      >
        <div className="text-white">{icon}</div>
      </div>
      <span
        className={`mt-2 text-center text-gray-800 text-xs ${
          isActive ? "text-orange-400" : ""
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default SidebarItem;
