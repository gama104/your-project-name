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
import { GeneraFile } from "../../(store)/definitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface ItemsComponentProps {
  files: GeneraFile[];
}

const ItemsComponent: React.FC<ItemsComponentProps> = ({ files }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
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

  const onFolderClick = (fileID: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("file", fileID);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {files.map((file) => (
        <Card
          onClick={() => onFolderClick(file.id)}
          className="cursor-pointer bg-gray-100 hover:bg-gray-200 py-4"
        >
          <CardContent className="flex items-center px-3">
            <FaCheck className="text-sky-400 mr-2" />
            <div className="flex-grow"></div>
            <FaEllipsisV className="text-gray-500 ml-2" />
          </CardContent>
          <CardContent className="flex items-center text-5xl p-3">
            {getFileIcon(file.fileType)}
          </CardContent>
          <CardContent className="text-center px-3 pb-3">
            <div className="font-semibold">{file.name}</div>
            <div className="flex justify-between mt-4">
              <span className="text-sky-400 text-sm font-bold align-middle pt-1">
                {file.size} MB
              </span>
              <div className="text-right">
                <p className="text-xs">{file.date}</p>
                <p className="text-xs">{file.time}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ItemsComponent;
