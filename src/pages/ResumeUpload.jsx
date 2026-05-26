import { useState } from "react";
import axios from "axios";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const uploadResume = async () => {

    const formData = new FormData();

    formData.append("file", file);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/resume/upload",
        formData
      );

      alert(response.data.message);

    } catch (error) {

      alert("Upload Failed");

    }
  };

  return (
    <div>

      <h2>Resume Upload</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={uploadResume}>
        Upload Resume
      </button>

    </div>
  );
}

export default ResumeUpload;