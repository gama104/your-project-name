import { folders, files } from "@/app/filesdashboard/(store)/placeholder-data";
import { Folder, GeneraFile } from "@/app/filesdashboard/(store)/definitions";

// Simulate an API call to fetch folders
export const getFoldersAsync = async (): Promise<Folder[]> => {
    const url = `/api/folders`;
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(folders);
        }, 1000);
    });
}

// Simulate an API call to fetch files for a given folder
export const getFilesAsync = async (folderId: number): Promise<GeneraFile[]> => {
    const url = `/api/folders/${folderId}/files`;
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(files[folderId] || []);
        }, 1000);
    });
}
