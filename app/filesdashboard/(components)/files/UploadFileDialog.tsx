"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FileUpload from "./FileUpload";
import { Progress } from "@/components/ui/progress";
import {
  FaFilePdf,
  FaFileExcel,
  FaFileImage,
  FaFileWord,
  FaTimes,
} from "react-icons/fa";

interface UploadFileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMore: () => void;
  onValidate: () => void;
}

const UploadFileDialog: React.FC<UploadFileDialogProps> = ({
  isOpen,
  onClose,
  onAddMore,
  onValidate,
}) => {
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);

  const handleFileSelect = (files: File[]) => {
    setPendingFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleFileRemove = (index: number) => {
    setPendingFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return <FaFilePdf className="text-red-500 mr-2 text-4xl" />;
      case "xls":
      case "xlsx":
        return <FaFileExcel className="text-green-500 mr-2 text-4xl" />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <FaFileImage className="text-blue-500 mr-2 text-4xl" />;
      case "doc":
      case "docx":
        return <FaFileWord className="text-blue-500 mr-2 text-4xl" />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-3/5 p-6">
        <DialogHeader className="flex justify-between">
          <DialogTitle>Add New File</DialogTitle>
          <DialogClose onClick={onClose} />
        </DialogHeader>
        <p className=" text-gray-700 text-xs">
          Files should be excel, image, pdf, or doc file.
        </p>
        <div className="mb-4">
          <FileUpload onFileSelect={handleFileSelect} />
        </div>
        {pendingFiles.length > 0 && (
          <div className="mb-4">
            <ul className="list-inside">
              {pendingFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex flex-col text-gray-700 bg-gray-200 p-3 rounded text-sm mb-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getFileIcon(file.name)}
                      <div className="ml-2">
                        <div>{file.name}</div>
                        <div className="text-xs">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </div>
                      </div>
                    </div>
                    <button onClick={() => handleFileRemove(index)}>
                      <FaTimes className="text-gray-500 hover:text-red-500 mb-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <Progress
                      value={100}
                      className="h-2 w-full [&>*]:bg-sky-500"
                    />
                    <div className="pl-2 text-gray-700 text-xs">100%</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            className="border-sky-500 text-sky-500 hover:bg-gray-200 hover:text-black"
            onClick={onAddMore}
          >
            Add More
          </Button>
          <Button
            className="bg-sky-500 text-white hover:bg-sky-600"
            onClick={onValidate}
          >
            Validate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadFileDialog;
