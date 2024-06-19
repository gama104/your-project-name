// pages/files/[folderId]/[fileId].tsx

import { useRouter } from "next/router";
import FileDetails from "@/components/ui/FileDetails";

const FilePage = () => {
  const router = useRouter();
  const { folderId, fileId } = router.query;

  if (typeof folderId !== "string" || typeof fileId !== "string") {
    return null; // Handle loading state or error
  }

  return <FileDetails fileId={parseInt(fileId)} />;
};

export default FilePage;
