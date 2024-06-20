import { Folder, GeneraFile } from "./definitions";

export const folders: Folder[] = [
  {
    id: 1,
    name: "Folder 1",
    location: "Location 1",
    date: "2022-01-01",
    time: "12:00",
  },
  {
    id: 2,
    name: "Folder 2",
    location: "Location 2",
    date: "2022-01-02",
    time: "13:00",
  },
  {
    id: 3,
    name: "Folder 3",
    location: "Location 3",
    date: "2022-01-03",
    time: "14:00",
  },
];

export const files: Record<number, GeneraFile[]> = {
  1: [
    {
      id: 1,
      name: "Report1.pdf",
      size: 2.4,
      date: "29 May 2024",
      time: "12:00 PM",
      details: "Details for Report1.pdf",
      activity: "Activity for Report1.pdf",
      fileType: "pdf",
      accessUsers: [
        { id: 1, initials: "JD" },
        { id: 2, initials: "AS" },
        { id: 3, initials: "MK" },
      ],
    },
    {
      id: 2,
      name: "Report2.pdf",
      size: 3.1,
      date: "28 May 2024",
      time: "10:30 AM",
      details: "Details for Report2.pdf",
      activity: "Activity for Report2.pdf",
      fileType: "excel",
      accessUsers: [
        { id: 1, initials: "JD" },
        { id: 2, initials: "AS" },
        { id: 3, initials: "MK" },
      ],
    },
    {
      id: 3,
      name: "Report3.pdf",
      size: 3.1,
      date: "28 May 2024",
      time: "10:30 AM",
      details: "Details for Report3.pdf",
      activity: "Activity for Report2.pdf",
      fileType: "word",
      accessUsers: [
        { id: 1, initials: "JD" },
        { id: 2, initials: "AS" },
        { id: 3, initials: "MK" },
      ],
    },
  ],
  2: [
    {
      id: 3,
      name: "File3.pdf",
      size: 1.2,
      date: "27 May 2024",
      time: "09:00 AM",
      details: "Details for File3.pdf",
      activity: "Activity for File3.pdf",
      fileType: "pdf",
      accessUsers: [
        { id: 1, initials: "JD" },
        { id: 2, initials: "AS" },
        { id: 3, initials: "MK" },
      ],
    },
  ],
  3: [],
};
