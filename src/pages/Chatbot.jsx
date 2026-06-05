import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    if (!question) {

      alert("Please enter question");

      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {

      alert("Please Login First");

      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        "https://ai-chat-backend-gn18.onrender.com/api/chatbot/ask",
        {
          question: question
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setAnswer(response.data.answer);

    }

    catch (error) {

      console.log(error);

      setAnswer(
        "Unable to connect with AI server"
      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="chat-wrapper">

      <div className="chat-container">

        <h1>AI Career Chatbot</h1>

        <p>
          Ask interview questions based on your resume
          and improve your career preparation.
        </p>

        <textarea
          placeholder="Ask interview questions..."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <button onClick={askAI}>

          {
            loading
            ? "Loading..."
            : "Ask AI"
          }

        </button>

        {
          answer && (

            <div className="answer-box">

              <h3>AI Response</h3>

              <p>{answer}</p>

            </div>
          )
        }

      </div>

    </div>
  );
}

export default Chatbot;