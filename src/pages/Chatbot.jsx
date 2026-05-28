import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [question, setQuestion] = useState("");

  const [reply, setReply] = useState("");

  const askQuestion = async () => {

    try {

      const response = await axios.post(
        "https://ai-chat-backend-gn18.onrender.com/api/chatbot",
        {
          question
        }
      );

      setReply(response.data.reply);

    } catch (error) {

      alert("Chatbot Error");

    }
  };

  return (
    <div>

      <h2>AI Career Chatbot</h2>

      <input
        type="text"
        placeholder="Ask Question"
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />

      <button onClick={askQuestion}>
        Ask AI
      </button>

      <br /><br />

      <h3>{reply}</h3>

    </div>
  );
}

export default Chatbot;
