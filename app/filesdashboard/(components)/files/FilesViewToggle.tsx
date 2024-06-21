'use client'
import React from "react";
import { FaList, FaTh } from "react-icons/fa";
import { Toggle } from "@/components/ui/toggle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilesViewToggleProp {
  fileview?: string;
}

const FileList: React.FC<FilesViewToggleProp> = ({ fileview }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedView = searchParams.get("view") || fileview || "list";

  const onViewClick = (view: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedView !== view) {
      params.set("view", view);
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div className="flex space-x-0 border border-gray-300 rounded-full">
      <Toggle
        className={`flex items-center justify-center w-12 h-8 focus:outline-none ${
          selectedView === "list" ? "bg-gray-300" : "bg-white"
        } ${selectedView === "list" ? "rounded-r-none" : ""} hover:bg-gray-300 rounded-l-full`}
        aria-label="Toggle list view"
        onClick={() => onViewClick("list")}
      >
        <FaList className="text-blue-500" />
      </Toggle>
      <Toggle
        className={`flex items-center justify-center w-12 h-8 focus:outline-none ${
          selectedView === "icons" ? "bg-gray-300" : "bg-white"
        } ${selectedView === "icons" ? "rounded-l-none" : ""} hover:bg-gray-300 rounded-r-full`}
        aria-label="Toggle icons view"
        onClick={() => onViewClick("icons")}
      >
        <FaTh className="text-blue-500" />
      </Toggle>
    </div>
  );
};

export default FileList;
