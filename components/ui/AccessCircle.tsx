"use client";
import React from "react";

interface AccessCircleProps {
  initials: string;
}

const AccessCircle: React.FC<AccessCircleProps> = ({ initials }) => {
  return (
    <div className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-sky-200">
      <span className="text-sky-500">{initials}</span>
    </div>
  );
};

export default AccessCircle;
