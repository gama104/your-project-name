import React from "react";
import {FaFileAlt } from "react-icons/fa";
import FileListItem from "./FileListItem";
import FileListIcon from "./FileListIcon";
import { Button } from "@/components/ui/button";
import { BsPlus } from "react-icons/bs";
import UploadFileDialog from "./UploadFileDialog";
import { GeneraFile } from "../../(store)/definitions";
import { files as filesRecord } from "../../(store)/placeholder-data";
import FilesViewToggle from "./FilesViewToggle";
import AddFileButton from "./AddFileButton";

interface FileListProps {
  folder?: string;
  view?:string;
}

const FileList = ({ folder,view }: FileListProps) => {
  const selectedFolderID = folder;
  const selectedView = view || "list";

  const files: GeneraFile[] = selectedFolderID
  ? filesRecord[parseInt(selectedFolderID)] || []
  : [];
  const viewType = selectedView;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full flex flex-col relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <FaFileAlt className="text-teal-800 mr-2 text-lg" />
          <h2 className="text-lg font-semibold text-teal-800">User Reports</h2>
        </div>
        <FilesViewToggle fileview={view}/>
      </div>
      <div className="flex-grow">
        {viewType === "list" ? (
          <FileListItem files={files} />
        ) : (
          <FileListIcon files={files}/>
        )}
      </div>
      <div className="mt-auto flex justify-end items-center">
        <p className="text-gray-500 text-sm mr-1 mb-2">
          To upload a new file, it is required to add PDF, DOC XLSX source.
        </p>
      </div>
        <AddFileButton/>
    </div>
  );
}
export default FileList;