import FileDetails from "./(components)/files/FileDetails";
import FileList from "./(components)/files/FileList";
import FolderList from "./(components)/folders/FolderList";
export default function FilesDashboard({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const selectedFile = searchParams?.file;
  const selectedFolder = searchParams?.folder;
  const selectedView= searchParams?.view;
  return (
    <div className="flex-1 bg-gray-200 p-4 h-full">
      <div className={`flex space-x-3 h-full`}>
        <div className="w-2/5">
          <FolderList/>
        </div>
        <div className="w-2/5">
          <FileList folder={selectedFolder}  view={selectedView} />
        </div>
        {selectedFile && (
          <div className="w-1/5">
            <FileDetails id={selectedFile} />
          </div>
        )}
      </div>
    </div>
  );
}
