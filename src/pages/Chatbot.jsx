import { useState } from "react";
import axios from "axios";

function Chatbot() {

  // ✅ STATES (THIS WAS MISSING IN YOUR CODE)
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Login First");
      return;
    }

    if (!question.trim()) return;

    const userMessage = question;

    setQuestion("");

    // Add user message
    setChat((prev) => [
      ...prev,
      { sender: "user", text: userMessage }
    ]);

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

      const aiReply = response?.data?.reply || "No response";

      setChat((prev) => [
        ...prev,
        { sender: "ai", text: aiReply }
      ]);

    } catch (error) {
      console.log(error);

      setChat((prev) => [
        ...prev,
        { sender: "ai", text: "Server error. Try again." }
      ]);

    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>AI Career Chatbot</h2>

      {/* CHAT BOX */}
      <div style={{ height: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>

        {chat.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <p><b>{msg.sender}:</b> {msg.text}</p>
          </div>
        ))}

        {loading && <p>AI is typing...</p>}
      </div>

      {/* INPUT */}
      <input
        type="text"
        value={question}
        placeholder="Ask something..."
        onChange={(e) => setQuestion(e.target.value)}
      />

      {/* BUTTON */}
      <button onClick={askQuestion}>
        Send
      </button>

    </div>
  );
}

export default Chatbot;