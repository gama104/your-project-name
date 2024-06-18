"use client";
import React, { useState } from "react";
import { FaList, FaTh, FaFileAlt } from "react-icons/fa";
import { Toggle } from "@/components/ui/toggle";
import FileListItem from "./FileListItem";
import FileListIcon from "./FileListIcon";
import { Button } from "@/components/ui/button";
import { BsPlus } from "react-icons/bs";
import UploadFileDialog from "./UploadFileDialog";

interface File {
  id: number;
  name: string;
  size: number;
  date: string;
  time: string;
  details?: string;
  activity?: string;
  fileType: "pdf" | "excel" | "word";
}

interface Props {
  files: File[];
  viewType: "list" | "icons";
  onFileClick: (file: File) => void;
  setViewType: (viewType: "list" | "icons") => void;
}

const FileList: React.FC<Props> = ({
  files,
  viewType,
  onFileClick,
  setViewType,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleAddMore = () => {
    console.log("Add more files");
    setIsDialogOpen(false);
  };
  const handleValidate = () => {
    console.log("Validate files");
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full flex flex-col relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <FaFileAlt className="text-teal-800 mr-2 text-lg" />
          <h2 className="text-lg font-semibold text-teal-800">User Reports</h2>
        </div>
        <div className="flex space-x-0 border border-gray-300 rounded-full">
          <Toggle
            className={`flex items-center justify-center w-12 h-8 focus:outline-none ${
              viewType === "list" ? "bg-gray-300" : "bg-white"
            } ${
              viewType === "list"
                ? "rounded-l-full"
                : "rounded-l-full rounded-r-none"
            } hover:bg-gray-300`}
            aria-label="Toggle list view"
            onClick={() => setViewType("list")}
          >
            <FaList className="text-blue-500" />
          </Toggle>
          <Toggle
            className={`flex items-center justify-center w-12 h-8 focus:outline-none ${
              viewType === "icons" ? "bg-gray-300" : "bg-white"
            } ${
              viewType === "icons"
                ? "rounded-r-full"
                : "rounded-r-full rounded-l-none"
            } hover:bg-gray-300`}
            aria-label="Toggle icons view"
            onClick={() => setViewType("icons")}
          >
            <FaTh className="text-blue-500" />
          </Toggle>
        </div>
      </div>
      <div className="flex-grow">
        {viewType === "list" ? (
          <FileListItem files={files} onFileClick={onFileClick} />
        ) : (
          <FileListIcon files={files} onFileClick={onFileClick} />
        )}
      </div>
      <div className="mt-auto flex justify-end items-center">
        <p className="text-gray-500 text-sm mr-1 mb-2">
          To upload a new file, it is required to add PDF, DOC XLSX source.
        </p>
      </div>
      <div className="flex justify-end">
        <Button
          className="flex items-center px-2 py-1 bg-sky-500 text-white rounded"
          onClick={handleOpenDialog}
        >
          <BsPlus className="mr-1 text-white" />
          Add new file
        </Button>
      </div>
      <UploadFileDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onAddMore={handleAddMore}
        onValidate={handleValidate}
      />
    </div>
  );
};

export default FileList;
