import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GeneraFileDetail } from "../../(store)/definitions";
import { filesdetail as filesdetail } from "../../(store)/placeholder-data";

interface FilesDetailsProps {
  id: string;
}

const FileDetails = ({ id }: FilesDetailsProps) => {
  const details: GeneraFileDetail[] = Object.values(filesdetail).flat();
  const detail = details.find((obj) => obj.id === id);
  if (!detail) {
    return <div className=""></div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md mb-4 pt-4 h-full">
      <div className="flex items-center pl-4">
        <h2 className="text-lg font-semibold text-teal-800">{detail.name}</h2>
      </div>
      <div className="mt-4 p-4">
        <div className="font-medium">Type:</div>
        <div>{detail.fileType}</div>
        <div className="mt-4">
          <div className="font-medium">Size:</div>
          <div>{detail.size} MB</div>
        </div>
        <div className="mt-4">
          <div className="font-medium">Local:</div>
          <div>{detail.name}</div>
        </div>
        <div className="mt-4">
          <div className="font-medium">Date of Creation:</div>
          <div>{new Date(detail.date).toLocaleDateString()}</div>
        </div>
        <div className="mt-4">
          <div className="font-medium">Description:</div>
          <div>{detail.details}</div>
        </div>
      </div>
    </div>
  );
};

export default FileDetails;
