"use client";
import React from "react";
import { FaFolder } from "react-icons/fa";
import { Folder } from "@/app/filesdashboard/(store)/definitions";
import { BsThreeDotsVertical } from "react-icons/bs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FolderListItemProps {
  folder: Folder;
}

const FileListItem: React.FC<FolderListItemProps> = ({ folder }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedFolder = searchParams.get("folder");

  const onFolderClick = (folderId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedFolder !== folderId) {
      params.set("folder", folderId);
      params.delete("file");
      replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <li
      onClick={() => onFolderClick(folder.id)}
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
  );
};

export default FileListItem;
