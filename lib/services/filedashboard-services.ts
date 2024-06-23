import { Folder, GeneraFile, GeneraFileDetail } from "@/app/filesdashboard/(store)/definitions";
import { filesdetail, folders } from "@/app/filesdashboard/(store)/placeholder-data";
import { files as filesRecord } from "@/app/filesdashboard/(store)/placeholder-data";

export const getFolders = (): Promise<Folder[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.values(folders).flat());
    }, 1000);
  });
};

export const getFilesByFolderId = async (folderId?: string): Promise<GeneraFile[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(folderId ? filesRecord[parseInt(folderId)] || [] : []);
    }, 1000);
  });
};

export const getFileDetailById = async (id: string): Promise<GeneraFileDetail | null> => {
    return new Promise((resolve) => {
      const details: GeneraFileDetail[] = Object.values(filesdetail).flat();
      const detail = details.find((obj) => obj.id === id);
      resolve(detail || null);
    });
  };
