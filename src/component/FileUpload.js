import React, { useState } from "react";
import EmployeeService from '../service/EmployeeService';

const FileUploadComponent = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleFileUpload = async (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    if (!file) {
        setMessage('Please select a file to upload.');
        return;
      }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await EmployeeService.uploadFile(formData);
      console.log(formData)
      console.log(response.data)
      setMessage(response.data);
    } catch (error) {
      setMessage(`Error: ${error.response?.data || error.message}`);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <button type="submit" className="cbtn btn-primary mb-2 mt-3">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUploadComponent;
