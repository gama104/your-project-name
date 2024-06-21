import React from "react";
import { Folder } from "../../(store)/definitions";
import FolderListItem from "./FolderListItem";

interface Props {
  folders: Folder[];
}

const FolderList: React.FC<Props> = ({ folders }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full">
      <h2 className="text-lg font-semibold text-teal-800 mb-4">User Folders</h2>
      <ul>
        {folders.map((folder) => (
          <FolderListItem folder={folder} />
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
