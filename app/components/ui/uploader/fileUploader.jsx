import { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  FaPlus,
  FaTimes,
  FaFilePdf,
  FaFileWord,
  FaFileAlt,
  FaFileExcel,
} from "react-icons/fa";

const getFileIcon = (fileName) => {
  const ext = fileName?.split(".").pop().toLowerCase();
  switch (ext) {
    case "pdf":
      return <FaFilePdf className="text-red-500 text-4xl" />;
    case "doc":
    case "docx":
      return <FaFileWord className="text-blue-500 text-4xl" />;
    case "xlsx":
    case "xls":
      return <FaFileExcel className="text-green-500 text-4xl" />;
    case "txt":
      return <FaFileAlt className="text-gray-500 text-4xl" />;
    default:
      return <FaFileAlt className="text-gray-400 text-4xl" />;
  }
};

const FileUploader = ({ setImageFile }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    setImageFile(selectedFile);
    setError(""); // Clear error on success
  };

  const onDropRejected = (fileRejections) => {
    if (fileRejections.length > 0) {
      const rejectedFile = fileRejections[0];
      const ext = rejectedFile.file.name.split(".").pop();
      setError(`Unsupported file type: .${ext}`);
    }
  };

  const removeFile = () => {
    setFile(null);
    setImageFile(null);
    setError("");
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "text/plain": [".txt"],
    },
    multiple: false,
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 mt-8">
      <label className="block text-center text-gray-700 font-medium mb-2">
        <span className="text-lg">Upload Your Resume</span>
        <p className="text-sm text-gray-500 mt-1">
          Allowed File Formats: .pdf, .doc, .docx, .xlsx, .txt
        </p>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 p-4">
        {!file ? (
          <div
            {...getRootProps()}
            className="h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-accent hover:bg-accent-muted transition"
          >
            <input {...getInputProps()} />
            <FaPlus className="text-gray-400 text-5xl" />
          </div>
        ) : (
          <div className="relative w-full h-40 rounded-lg border border-gray-300 shadow-md flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              {getFileIcon(file.name)}
              <span className="text-sm text-gray-700">{file.name}</span>
            </div>
            <button
              onClick={removeFile}
              className="bg-white p-1 rounded-full shadow hover:bg-gray-200 cursor-pointer"
            >
              <FaTimes className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        )}
        {error && (
          <div className="text-red-600 text-sm text-center font-medium">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
