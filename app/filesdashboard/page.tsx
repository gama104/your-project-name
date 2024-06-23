import { Suspense } from "react";
import FileDetails from "./(components)/files/FileDetails";
import FileList from "./(components)/files/FileList";
import FolderList from "./(components)/folders/FolderList";
import Loading from "./loading";

export default function FilesDashboard({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const selectedFile = searchParams?.file;
  const selectedFolder = searchParams?.folder;
  const selectedView = searchParams?.view;

  return (
    <div className="flex-1 bg-gray-200 p-4 h-full">
      <div className="flex h-full space-x-3">
        <div className={"flex flex-col w-2/5"}>
          <Suspense fallback={<Loading />}>
            <FolderList />
          </Suspense>
        </div>
        <div className={"flex flex-col w-2/5"}>
          <Suspense fallback={<Loading />}>
            <FileList folder={selectedFolder} view={selectedView} />
          </Suspense>
        </div>
        {selectedFile && (
          <div className="flex flex-col w-1/5">
            <Suspense fallback={<Loading />}>
              <FileDetails id={selectedFile} />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
}
