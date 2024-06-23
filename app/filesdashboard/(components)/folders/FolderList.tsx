import React, { Suspense } from "react";
import FolderListItem from "./FolderListItem";
import { getFolders } from "@/lib/services/filedashboard-services";

const FolderList = async () => {
  const result = await getFolders();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <h2 className="text-lg font-semibold text-teal-800 mb-4">User Folders</h2>
      <ul>
        {(await result).map((folder) => (
          <FolderListItem key={folder.id} folder={folder} />
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
