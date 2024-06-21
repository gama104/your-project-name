"use client";
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
      <div className="flex flex-col items-end space-y-2 mt-2">
        <p className="text-gray-500 text-sm mb-2">
          To upload a new file, it is required to add PDF, DOC, XLSX source.
        </p>
        <div>
          <Button
            className="flex items-center px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
            onClick={handleOpenDialog}
          >
            <BsPlus className="mr-2 text-white" />
            Add new file
          </Button>
        </div>
      </div>
      <UploadFileDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </>
  );
};

export default AddFileButton;
