"use client";
import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  FaCheck,
  FaEllipsisV,
  FaFilePdf,
  FaFileExcel,
  FaFileWord,
} from "react-icons/fa";
import { ItemsComponentProps } from "@/lib/definitions";

const ItemsComponent: React.FC<ItemsComponentProps> = ({
  files,
  onFileClick,
}) => {
  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return <FaFilePdf className="text-red-500 mx-auto" />;
      case "excel":
        return <FaFileExcel className="text-green-500 mx-auto" />;
      case "word":
        return <FaFileWord className="text-blue-500 mx-auto" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {files.map((file) => (
        <Card
          key={file.id}
          onClick={() => onFileClick(file)}
          className="cursor-pointer bg-gray-100 hover:bg-gray-200 py-4"
        >
          <CardContent className="flex items-center">
            <FaCheck className="text-sky-400 mr-2" />
            <div className="flex-grow"></div>
            <FaEllipsisV className="text-gray-500 ml-2" />
          </CardContent>
          <CardContent className="flex items-center text-5xl">
            {getFileIcon(file.fileType)}
          </CardContent>
          <CardContent className="text-center">
            <div className="font-semibold">{file.name}</div>
            <div className="flex justify-between mt-4">
              <span className="text-sky-400 font-bold align-middle pt-3">
                {file.size} MB
              </span>
              <div className="text-right">
                <p>{file.date}</p>
                <p>{file.time}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ItemsComponent;
