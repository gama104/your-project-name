"use client"
import React from "react";
import { GeneraFile } from "../../(store)/definitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  files: GeneraFile[];
}

const FileListItem: React.FC<Props> = ({ files}) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const onFolderClick = (fileID: string) => {
      const params = new URLSearchParams(searchParams.toString());
        params.set("file", fileID);
        replace(`${pathname}?${params.toString()}`);
    };

  return (
    <ul className="divide-y divide-gray-200">
      {files.map((file) => (
        <li
          onClick={() => onFolderClick(file.id)}
          className="flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer"
        >
          <div>
            <p className="text-sm font-medium text-gray-900">{file.name}</p>
            <p className="text-sm text-gray-500">{`${file.size} MB`}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{file.date}</p>
            <p className="text-sm text-gray-500">{file.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FileListItem;
