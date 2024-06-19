"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FolderList from "../folders/FolderList";
import FileList from "../files/FileList";
import FileDetails from "../files/FileDetails";
import { Folder, GeneraFile } from "@/lib/definitions";
import { files, folders } from "@/lib/placeholder-data";

const MainContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const folderIdParam = searchParams.get("folderId");
  const fileIdParam = searchParams.get("fileId");

  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
  const [selectedFile, setSelectedFile] = useState<GeneraFile | null>(null);
  const [viewType, setViewType] = useState<"list" | "icons">("list");

  useEffect(() => {
    if (folderIdParam) {
      const folder = folders.find((f) => f.id.toString() === folderIdParam);
      setSelectedFolder(folder || null);
    }
    if (fileIdParam && selectedFolder) {
      const file = files[selectedFolder.id].find(
        (f) => f.id.toString() === fileIdParam 
      );
      setSelectedFile(file || null);
    }
  }, [folderIdParam, fileIdParam, selectedFolder]);

  const handleFolderClick = (folder: Folder) => {
    setSelectedFolder(folder);
    setSelectedFile(null);
    const params = new URLSearchParams(searchParams.toString());
    params.set("folderId", folder.id.toString());
    params.delete("fileId");
    router.replace(`?${params.toString()}`);
  };

  const handleFileClick = (file: GeneraFile) => {
    setSelectedFile(file);
    const params = new URLSearchParams(searchParams.toString());
    params.set("folderId", selectedFolder?.id.toString() || "");
    params.set("fileId", file.id.toString());
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="flex-1 bg-gray-200 p-4 h-full">
      <div
        className={`flex ${selectedFile ? "space-x-4" : "space-x-6"} h-full`}
      >
        <div className={selectedFile ? "w-2/5" : "w-2/5"}>
          <FolderList folders={folders} onFolderClick={handleFolderClick} />
        </div>
        <div className={selectedFile ? "w-2/5" : "w-3/5"}>
          <FileList
            files={selectedFolder ? files[selectedFolder.id] : []}
            viewType={viewType}
            onFileClick={handleFileClick}
            setViewType={setViewType}
          />
        </div>
        {selectedFile && (
          <div className="w-1/5">
            <FileDetails file={selectedFile} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
