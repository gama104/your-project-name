"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccessCircle from "./AccessCircle";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface File {
  id: number;
  name: string;
  size: number;
  date: string;
  time: string;
  details?: string;
  activity?: string;
  accessUsers?: { id: number; initials: string }[];
}

interface Props {
  file: File;
}

const FileDetails: React.FC<Props> = ({ file }) => {
  const [activeTab, setActiveTab] = useState<"details" | "activity">("details");

  return (
    <div className="bg-white rounded-lg shadow-md mb-4 pt-4 h-full">
      <div className="flex items-center pl-4">
        <FaCheck className="text-teal-800 mr-2 text-lg" />
        <h2 className="text-lg font-semibold text-teal-800">{file.name}</h2>
      </div>
      <div className="flex flex-col flex-1">
        <Tabs defaultValue="details" className="flex-1">
          <TabsList className="flex bg-white">
            <TabsTrigger
              value="details"
              className={`flex-1 text-center py-2 rounded-none ${
                activeTab === "details"
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-gray-200"
              }`}
              onClick={() => setActiveTab("details")}
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className={`flex-1 text-center py-2 rounded-none ${
                activeTab === "activity"
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-gray-200"
              }`}
              onClick={() => setActiveTab("activity")}
            >
              Activity
            </TabsTrigger>
          </TabsList>
          <div className="flex-1">
            <TabsContent value="details">
              <div className="mt-4 p-4">
                <div className="mb-4">
                  <span className="font-semibold">Access</span>
                </div>
                <div className="flex flex-wrap items-center">
                  {file.accessUsers?.map((user, index) => (
                    <React.Fragment key={user.id}>
                              <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                              <AvatarFallback>{user.initials}</AvatarFallback>
                            </Avatar>
                      {index < (file.accessUsers?.length ?? 0) - 1 && (
                        <div className="border-l border-gray-300 h-10 mx-2"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="w-full border-t border-gray-300 mt-4"></div>{" "}
                {}
                <div className="mt-4">
                  <div className="font-bold">File Details</div>
                  <div className="mt-4">
                    <div className="font-medium">Type:</div>
                    <div>{file.details}</div>
                  </div>
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
                    <Input className="mt-2" placeholder="Enter description" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="activity">
              <div className="mt-4 p-4">{file.activity}</div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default FileDetails;
