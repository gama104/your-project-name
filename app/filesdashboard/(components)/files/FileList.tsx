"use client";
import React, { useState, useEffect } from "react";
import { FaList, FaTh, FaFileAlt } from "react-icons/fa";
import { Toggle } from "@/components/ui/toggle";
import FileListItem from "./FileListItem";
import FileListIcon from "./FileListIcon";
import { Button } from "@/components/ui/button";
import { BsPlus } from "react-icons/bs";
import UploadFileDialog from "./UploadFileDialog";
import { GeneraFile } from "../../(store)/definitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { files as filesRecord } from "../../(store)/placeholder-data";

export interface FileListProps {}

const FileList: React.FC<FileListProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [folderId, setFolderId] = useState<string | null>(null);
  const [files, setFiles] = useState<GeneraFile[]>([]);

  useEffect(() => {
    const folderIdParam = searchParams.get("folder");

    if (!folderIdParam) {
      setFolderId(null);
      setFiles([]);
      return;
    }

    // Convert folderIdParam to number if necessary
    const parsedFolderId = parseInt(folderIdParam, 10);

    // Filter files based on the selected folder ID
    const folderFiles = filesRecord[parsedFolderId] || [];

    setFolderId(folderIdParam);
    setFiles(folderFiles);
  }, [searchParams]);

  const handleSetViewType = (viewType: "list" | "icons") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("viewType", viewType);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleFileClick = (file: GeneraFile) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("file", file.id);
    router.replace(`${pathname}?${params.toString()}`);
  };

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

  const viewType = searchParams.get("viewType") || "list";

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
              viewType === "list" && "rounded-r-none"
            } hover:bg-gray-300 rounded-l-full `}
            aria-label="Toggle list view"
            onClick={() => handleSetViewType("list")}
          >
            <FaList className="text-blue-500" />
          </Toggle>
          <Toggle
            className={`flex items-center justify-center w-12 h-8 focus:outline-none ${
              viewType === "icons" ? "bg-gray-300" : "bg-white"
            } ${
              viewType === "icons" && " rounded-l-none"
            } hover:bg-gray-300 rounded-r-full`}
            aria-label="Toggle icons view"
            onClick={() => handleSetViewType("icons")}
          >
            <FaTh className="text-blue-500" />
          </Toggle>
        </div>
      </div>
      <div className="flex-grow">
        {viewType === "list" ? (
          <FileListItem files={files} onFileClick={handleFileClick} />
        ) : (
          <FileListIcon files={files} onFileClick={handleFileClick} />
        )}
      </div>
      <div className="mt-auto flex justify-end items-center">
        <p className="text-gray-500 text-sm mr-1 mb-2">
          To upload a new file, it is required to add PDF, DOC XLSX source.
        </p>
      </div>
      <div className="flex justify-end">
        <Button
          className="flex items-center px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
          onClick={handleOpenDialog}
        >
          <BsPlus className="mr-2 text-white" />
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
