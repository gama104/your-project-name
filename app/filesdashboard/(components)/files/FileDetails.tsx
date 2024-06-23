import { getFileDetailById } from "@/lib/services/filedashboard-services";
interface FilesDetailsProps {
  id: string;
}

const FileDetails = async ({ id }: FilesDetailsProps) => {
  const detail = await getFileDetailById(id);
  if (!detail) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <h2 className="text-lg font-semibold text-teal-800">{detail.name}</h2>
      <div className="mt-4">
        <div className="font-medium">Type:</div>
        <div>{detail.fileType}</div>
      </div>
      <div className="mt-4">
        <div className="font-medium">Size:</div>
        <div>{detail.size} MB</div>
      </div>
      <div className="mt-4">
        <div className="font-medium">Local:</div>
        <div>{detail.name}</div>
      </div>
      <div className="mt-4">
        <div className="font-medium">Date of Creation:</div>
        <div>{new Date(detail.date).toLocaleDateString()}</div>
      </div>
      <div className="mt-4">
        <div className="font-medium">Description:</div>
        <div>{detail.details}</div>
      </div>
    </div>
  );
};

export default FileDetails;
