// components/FileDetails.tsx

import React from "react";
import { GeneraFile } from "../../(store)/definitions";

interface Props {
  file: GeneraFile;
}

const FileDetails: React.FC<Props> = ({ file }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 pt-4 h-full">
      <div className="flex items-center pl-4">
        <h2 className="text-lg font-semibold text-teal-800">{file.name}</h2>
      </div>
      <div className="mt-4 p-4">
        <div className="font-medium">Type:</div>
        <div>{file.fileType}</div>
        <div className="mt-4">
          <div className="font-medium">Size:</div>
          <div>{file.size} MB</div>
        </div>
        <div className="mt-4">
          <div className="font-medium">Local:</div>
          <div>{file.name}</div>
        </div>
        <div className="mt-4">
          <div className="font-medium">Date of Creation:</div>
          <div>{new Date(file.date).toLocaleDateString()}</div>
        </div>
        <div className="mt-4">
          <div className="font-medium">Description:</div>
          <div>{file.details}</div>
        </div>
      </div>
    </div>
  );
};

export default FileDetails;
