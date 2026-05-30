import { useState } from "react";
import axios from "axios";

function UploadResume() {

  const [file, setFile] = useState(null);

  const uploadResume = async () => {

    const token = localStorage.getItem("token");

    console.log("TOKEN =", token);

    if (!token) {

      alert("Please Login First");

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

      console.log(response.data);

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

    <div>

      <h2>Upload Resume</h2>

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <br /><br />

      <button
        onClick={uploadResume}
      >

        Upload Resume

      </button>

    </div>

  );

}

export default UploadResume;