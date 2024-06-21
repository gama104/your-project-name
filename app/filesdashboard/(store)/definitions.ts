export interface Folder {
    id: string;
    name: string;
    location: string;
    date: string;
    time: string;
  }
  
 export  interface GeneraFileDetail {
    id: string;
    name: string;
    size: number;
    date: string;
    time: string;
    details?: string;
    activity?: string;
    fileType: "pdf" | "excel" | "word";
    accessUsers?: { id: string; initials: string }[];
  }

  export  interface GeneraFile {
    id: string;
    name: string;
    size: number;
    date: string;
    time: string;
    fileType: "pdf" | "excel" | "word";
  }