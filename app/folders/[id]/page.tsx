// pages/folders/[folderId]/index.tsx

import { useRouter } from "next/router";
import FileList from "@/components/ui/FileList";

const FolderPage = () => {
  const router = useRouter();
  const { folderId } = router.query;

  if (typeof folderId !== "string") {
    return null;
  }

  return <FileList folderId={parseInt(folderId)} />;
};

export default FolderPage;
