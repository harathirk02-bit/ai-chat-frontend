import { useState } from "react";
import axios from "axios";
import { FaUpload } from "react-icons/fa";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const uploadResume = async () => {

    if (!file) {

      alert(
        "Please select resume"
      );

      return;

    }

    const token = localStorage.getItem(
      "token"
    );

    if (!token) {

      alert(
        "Please Login First"
      );

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

            `Bearer ${token}`,

            "Content-Type":

            "multipart/form-data"

          }

        }

      );

      // SAVE ACTUAL BACKEND RESPONSE

      localStorage.setItem(

        "resumeData",

        JSON.stringify(

          response.data

        )

      );

      alert(

        "Resume Uploaded Successfully"

      );

      window.location.href =

      "/dashboard";

    }

    catch(error){

      console.log(error);

      alert(

        "Upload Failed"

      );

    }

  };

  return (

    <div className="form-container">

      <div className="upload-box">

        <FaUpload

          size={45}

          color="#2563eb"

        />

        <h1>

          Upload Resume

        </h1>

        <p>

          Upload your resume to get AI analysis

        </p>

        <input

          type="file"

          onChange={(e)=>

            setFile(

              e.target.files[0]

            )

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