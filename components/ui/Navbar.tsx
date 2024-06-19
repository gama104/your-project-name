import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="relative w-full h-20 bg-gray-100 text-black flex items-center justify-between z-10 px-6">
      <div className="flex items-center">
        <div className="flex items-center">
          <span className="mr-2 text-sky-500">View Reports</span>
          <BsChevronRight className="h-4 w-4 transform rotate-90 text-sky-500" />
        </div>
      </div>
      <div className="flex items-center">
        <p className="underline underline-offset-1 mr-5 text-orange-400">
          RFR reports
        </p>
        <span className="mr-2 text-sky-500">Name</span>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
