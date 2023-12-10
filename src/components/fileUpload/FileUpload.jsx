import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios
import { useNavigate, useParams } from "react-router-dom";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fkCarId, setCarId] = useState("");
const params=useParams()
const navigate=useNavigate();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCarIdChange = (event) => {
    setCarId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
   if(params.id){
    formData.append("fkCarId", params.id);
   }

    try {
      const response = await axios.post(
        "http://localhost:9292/api/cars/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file upload
          },
        }
      );

      console.log("File upload successful:", response.data);
      navigate("/");
    } catch (error) {
      console.error("File upload error:", error);
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="file">Select a file:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
