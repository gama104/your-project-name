import React from "react";
import { FaFileAlt } from "react-icons/fa";
import FileListItem from "./FileListItem";
import FileListIcon from "./FileListIcon";
import AddFileButton from "./AddFileButton";
import { GeneraFile } from "../../(store)/definitions";
import { files as filesRecord } from "../../(store)/placeholder-data";
import FilesViewToggle from "./FilesViewToggle";

interface FileListProps {
  folder?: string;
  view?: string;
}

const FileList = ({ folder, view }: FileListProps) => {
  const selectedFolderID = folder;
  const selectedView = view || "list";
  const files: GeneraFile[] = selectedFolderID
    ? filesRecord[parseInt(selectedFolderID)] || []
    : [];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
      <div className="flex justify-between mb-4">
        <div className="flex">
          <FaFileAlt className="text-teal-800 mr-2 text-lg" />
          <h2 className="text-lg font-semibold text-teal-800">User Reports</h2>
        </div>
        <FilesViewToggle fileview={view} />
      </div>
      <div className="flex-grow overflow-y-auto h-1">
        {selectedView === "list" ? (
          <FileListItem files={files} />
        ) : (
          <FileListIcon files={files} />
        )}
      </div>
      <div className="mt-auto">
        <AddFileButton />
      </div>
    </div>
  );
};

export default FileList;
