"use client";
import { Folder } from "@/lib/definitions";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";

interface Props {
  folders: Folder[];
  onFolderClick: (folder: Folder) => void;
}

const FolderList: React.FC<Props> = ({ folders, onFolderClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full">
      <h2 className="text-lg font-semibold text-teal-800 mb-4">User Folders</h2>
      <ul>
        {folders.map((folder) => (
          <li
            key={folder.id}
            onClick={() => onFolderClick(folder)}
            className="cursor-pointer flex items-center justify-between bg-cyan-600 p-2 rounded-lg mb-2 hover:bg-cyan-700"
          >
            <div className="flex items-center">
              <FaFolder className="text-white mr-4 text-4xl" />
              <div>
                <p className="font-bold text-white">{folder.name}</p>
                <p className="font-semibold text-sm text-white">Genera ID</p>
                <p className="text-sm text-white">San Juan</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 flex items-center">
              <span className="mr-4 text-white">
                {folder.date} - {folder.time}
              </span>
              <BsThreeDotsVertical className="text-white" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
