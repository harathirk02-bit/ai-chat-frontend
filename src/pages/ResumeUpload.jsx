import { useState } from "react";
import axios from "axios";
import { FaUpload } from "react-icons/fa";

function UploadResume() {

  const [file, setFile] = useState(null);

  const uploadResume = async () => {

    if (!file) {

      alert("Please select resume");

      return;
    }

    const formData = new FormData();

    formData.append(
      "file",
      file
    );

    try {

      const response = await axios.post(
        "https://ai-chat-backend-wtaf.onrender.com/upload-resume",
        formData,
        {
          headers: {

            Authorization:
              `Bearer ${token}`

          }
        }
      );

      localStorage.setItem(
        "resumeData",
        JSON.stringify({
          score: "88%",
          role: "Frontend Developer",
          strengths: "React, JavaScript, UI Design",
          improvement: "Backend, DSA",
          questions: [
            "Explain React Hooks",
            "Difference between let and var",
            "What is useEffect?"
          ]
        })
      );

      alert(response.data.message);

      alert(
        "Resume Uploaded Successfully"
      );

    }

    catch (error) {

      console.log(error);

      alert(
        "Upload Failed"
      );

    }

  };

  return (

    <div className="upload-wrapper">

      <div className="upload-box">

        <FaUpload
          size={45}
          color="#2563eb"
        />

        <h1>Upload Resume</h1>

        <p>
          Upload your resume to get AI-powered
          analysis and interview preparation.
        </p>

        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <button
          className="upload-btn"
          onClick={uploadResume}
        >
          Analyze Resume
        </button>

      </div>

    </div>

  );

}

export default ResumeUpload;
