"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AddFolderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const AddFolderDialog: React.FC<AddFolderDialogProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-96 p-6">
        <DialogHeader className="flex justify-self-start mb-4">
          <DialogTitle className="text-sky-500">Add New Folder</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <label className="block text-gray-700">Folder Name</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            placeholder="Type folder's name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Genera ID</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Genera ID"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            className="border-sky-500 text-sky-500 hover:bg-gray-200 hover:text-black"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="bg-sky-500 text-white hover:bg-sky-600"
            onClick={onSave}
          >
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddFolderDialog;
