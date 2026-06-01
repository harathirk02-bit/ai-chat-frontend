import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Login First");
      return;
    }

    const userMessage = question;

    setChat((prev) => [
      ...prev,
      { sender: "user", text: userMessage }
    ]);

    setQuestion("");
    setLoading(true);

    try {

      const response = await axios.post(
        "https://ai-chat-backend-wtaf.onrender.com/chatbot",
        { question: userMessage },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      setChat((prev) => [
        ...prev,
        { sender: "ai", text: response.data.reply }
      ]);

    } catch (error) {
      console.log(error);
      alert("Chatbot Error");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>AI Career Chatbot</h2>

      {/* CHAT BOX */}
      <div
        style={{
          border: "1px solid #ccc",
          height: "350px",
          overflowY: "auto",
          padding: "10px",
          background: "#f9f9f9"
        }}
      >
        {chat.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "10px"
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "10px",
                borderRadius: "10px",
                background: msg.sender === "user" ? "#DCF8C6" : "#fff",
                border: "1px solid #ddd"
              }}
            >
              <b>{msg.sender === "user" ? "You" : "AI"}:</b> {msg.text}
            </span>
          </div>
        ))}

        {/* TYPING INDICATOR */}
        {loading && (
          <div style={{ textAlign: "left", margin: "10px" }}>
            <i>AI is typing...</i>
          </div>
        )}
      </div>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Ask anything..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "70%", padding: "8px", marginTop: "10px" }}
      />

      <button
        onClick={askQuestion}
        style={{ padding: "8px 15px", marginLeft: "10px" }}
      >
        Send
      </button>

    </div>
  );
}

export default Chatbot;