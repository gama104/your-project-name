import FileDetails from "./(components)/files/FileDetails";
import FileList from "./(components)/files/FileList";
import FolderList from "./(components)/folders/FolderList";
export default function FilesDashboard({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const selectedFileID = searchParams?.file;
  return (
    <div className="flex-1 bg-gray-200 p-4 h-full">
      <div className={`flex space-x-4 h-full`}>
        <div className="w-2/5">
          <FolderList/>
        </div>
        <div className="w-2/5">
          <FileList />
        </div>
        {selectedFileID && (
          <div className="w-1/5">
            <FileDetails id={selectedFileID} />
          </div>
        )}
      </div>
    </div>
  );
}
