"use client";
import { FileUploadProps } from "../../(store)/definitions";
import React, { useState } from "react";

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelect(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(Array.from(e.target.files));
    }
  };

  return (
    <div
      className={`border-2 border-solid rounded p-6 hover:bg-gray-200 ${
        dragActive ? "border-blue-500" : "border-gray-300"
      }`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        id="file-upload"
        multiple
        onChange={handleChange}
      />
      <label
        htmlFor="file-upload"
        className="text-sm text-gray-700 cursor-pointer"
      >
        Drag and drop or <span className="text-blue-500">browse</span> to upload
      </label>
    </div>
  );
};

export default FileUpload;
