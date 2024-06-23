import React from "react";

const SkeletonFolderItem = () => (
  <li className="cursor-pointer flex items-center justify-between bg-gray-200 p-2 rounded-lg mb-2 animate-pulse">
    <div className="flex items-center">
      <div className="bg-gray-300 rounded-full h-10 w-10 mr-4"></div>
      <div>
        <div className="bg-gray-300 h-4 w-24 mb-1 rounded"></div>
        <div className="bg-gray-300 h-4 w-16 mb-1 rounded"></div>
        <div className="bg-gray-300 h-4 w-12 rounded"></div>
      </div>
    </div>
    <div className="text-sm text-gray-600 flex items-center">
      <div className="bg-gray-300 h-4 w-24 rounded mr-4"></div>
      <div className="bg-gray-300 h-4 w-6 rounded"></div>
    </div>
  </li>
);

const SkeletonFileItem = () => (
  <li className="cursor-pointer flex justify-between items-center bg-gray-200 p-4 rounded-lg mb-2 animate-pulse">
    <div className="flex">
      <div className="bg-gray-300 h-4 w-24 mb-1 rounded"></div>
      <div className="bg-gray-300 h-4 w-16 mb-1 rounded"></div>
    </div>
    <div className="text-right">
      <div className="bg-gray-300 h-4 w-24 mb-1 rounded"></div>
      <div className="bg-gray-300 h-4 w-16 rounded"></div>
    </div>
  </li>
);

export const FoldersSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md p-4 h-full">
    <div className="flex">
      <div className="bg-gray-300 rounded-full h-10 w-10 mr-2"></div>
      <h2 className="bg-gray-300 h-6 w-32 mt-2 rounded"></h2>
    </div>
    <ul className="mt-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <SkeletonFolderItem key={index} />
      ))}
    </ul>
  </div>
);

export const FilesListSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
    <div className="flex justify-between mb-4">
      <div className="flex">
        <div className="bg-gray-300 rounded-full h-10 w-10 mr-2"></div>
        <h2 className="bg-gray-300 h-6 w-32 mt-2 rounded"></h2>
      </div>
      <div className="bg-gray-300 h-6 w-10 rounded"></div>
    </div>
    <div className="flex-grow overflow-y-auto">
      <ul>
        {Array.from({ length: 5 }).map((_, index) => (
          <SkeletonFileItem key={index} />
        ))}
      </ul>
    </div>
    <div className="mt-auto flex justify-end">
      <div className="bg-gray-300 h-10 w-36 rounded"></div>
    </div>
  </div>
);

export const FileDetailsSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md p-4 h-full animate-pulse">
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
    <div className="mt-4">
      <div className="font-medium h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
    <div className="mt-4">
      <div className="font-medium h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
    <div className="mt-4">
      <div className="font-medium h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
    <div className="mt-4">
      <div className="font-medium h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
    <div className="mt-4">
      <div className="font-medium h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  </div>
);
