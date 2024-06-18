"use client";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import AddFolderDialog from "./AddFolderDialog";

interface Props {
  title: string;
  instructions: string;
}

const ContentHeader: React.FC<Props> = ({ title, instructions }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleSave = () => {
    console.log("Folder created");
    setIsDialogOpen(false);
  };
  return (
    <div className="relative w-full h-24 bg-white border-y-4 border-gray-200 text-black flex items-center justify-between px-6">
      <div className="flex items-center">
        <div className="h-2 w-2 bg-slate-300 rounded-full mr-2 mb-4"></div>
        <div>
          <p className="font-bold text-purple-900">{title}</p>
          <p className="text-sm">{instructions}</p>
        </div>
      </div>
      <Button
        className="flex items-center px-2 py-1 bg-sky-500 text-white rounded"
        onClick={handleOpenDialog}
      >
        <BsPlus className="mr-1 text-white" />
        Add new folder
      </Button>
      <AddFolderDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onSave={handleSave}
      />
    </div>
  );
};

export default ContentHeader;
