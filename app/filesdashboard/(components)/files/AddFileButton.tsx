
"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsPlus } from "react-icons/bs";
import UploadFileDialog from "./UploadFileDialog";

const AddFileButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="flex justify-end">
        <Button
          className="flex items-center px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
          onClick={handleOpenDialog}
        >
          <BsPlus className="mr-2 text-white" />
          Add new file
        </Button>
      </div>
      <UploadFileDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </>
  );
};

export default AddFileButton;
