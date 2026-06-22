import { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) {
      alert("Please enter a question");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setAnswer("Please login first.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://ai-chat-backend-wtaf.onrender.com/chatbot",
        {
          question: question,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnswer(response.data.reply || "No response received");
    } catch (error) {
      console.error("Chatbot Error:", error);

      if (error.response) {
        if (error.response.status === 401) {
          setAnswer("Session expired. Please login again.");
        } else {
          setAnswer(error.response.data.detail || "Server error occurred.");
        }
      } else {
        setAnswer("Unable to connect with AI server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-container">
        <h1>AI Career Chatbot</h1>

        <p>
          Ask interview questions based on your resume and improve your career
          preparation.
        </p>

        <textarea
          rows="5"
          placeholder="Ask interview questions..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={askAI} disabled={loading}>
          {loading ? "Loading..." : "Ask AI"}
        </button>

        {answer && (
          <div className="answer-box">
            <h3>AI Response</h3>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chatbot;