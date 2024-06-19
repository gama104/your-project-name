export interface Folder {
    id: number;
    name: string;
    location: string;
    date: string;
    time: string;
  }
  
 export  interface GeneraFile {
    id: number;
    name: string;
    size: number;
    date: string;
    time: string;
    details?: string;
    activity?: string;
    fileType: "pdf" | "excel" | "word";
    accessUsers?: { id: number; initials: string }[];
  }

 export interface Props {
    file?: GeneraFile;
    files: GeneraFile[];
    viewType?: "list" | "icons";
    onFileClick: (file: GeneraFile) => void;
    setViewType: (viewType: "list" | "icons") => void;
  }

  export interface FileUploadProps {
    onFileSelect: (files: File[]) => void;
}

export interface ItemsComponentProps {
    files: GeneraFile[];
    onFileClick: (file: GeneraFile) => void;
  }