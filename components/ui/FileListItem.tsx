import React from "react";

interface File {
  id: number;
  name: string;
  size: number;
  date: string;
  time: string;
  details?: string;
  activity?: string;
  fileType: "pdf" | "excel" | "word";
}

interface Props {
  files: File[];
  onFileClick: (file: File) => void;
}

const FileListItem: React.FC<Props> = ({ files, onFileClick }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {files.map((file) => (
        <li
          key={file.id}
          className="flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer"
          onClick={() => onFileClick(file)}
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
