import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    if (!question) {
      alert("Enter Question");
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        "https://ai-chat-backend-gn18.onrender.com/api/chat",
        {
          question: question
        }
      );

      setChat(response.data.answer);

    }

    catch (error) {

      console.log(error);

      setChat("Failed to get response");

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="chat-wrapper">

      <div className="chat-card">

        <h1>AI Career Assistant</h1>

        <p>
          Ask career questions, interview questions,
          or resume-related doubts.
        </p>

        <input
          type="text"
          placeholder="Ask something..."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <button onClick={askAI}>
          {loading ? "Loading..." : "Ask AI"}
        </button>

        {chat && (
          <div className="chat-response">
            <h3>AI Response</h3>
            <p>{chat}</p>
          </div>
        )}

      </div>

    </div>

  );

}

export default Chatbot;