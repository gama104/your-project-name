import React from "react";
import { Folder } from "../../(store)/definitions";
import { folders } from "../../(store)/placeholder-data";
import FolderListItem from "./FolderListItem";

const FolderList = () => {
  const result: Folder[] = Object.values(folders).flat();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <h2 className="text-lg font-semibold text-teal-800 mb-4">User Folders</h2>
      <ul>
        {result.map((folder) => (
          <FolderListItem key={folder.id} folder={folder} />
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
