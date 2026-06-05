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

    if (!question.trim()) return;

    const userMessage = question;

    // Add user message
    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage
      }
    ]);

    setQuestion("");

    setLoading(true);

    try {

      const response = await axios.post(
        "https://ai-chat-backend-wtaf.onrender.com/chatbot",
        {
          question: userMessage
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      const aiReply =
        response?.data?.reply ||
        "No response from AI";

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiReply
        }
      ]);

    } catch (error) {

      console.log(error);

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Server Error"
        }
      ]);

    }

    setLoading(false);
  };

  return (

    <div style={{ padding: "20px" }}>

      <h2>AI Career Chatbot</h2>

      {/* CHAT AREA */}

      <div
        style={{
          border: "1px solid gray",
          height: "350px",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "20px"
        }}
      >

        {

          chat.map((msg, index) => (

            <div
              key={index}
              style={{
                textAlign:
                  msg.sender === "user"
                    ? "right"
                    : "left",

                marginBottom: "10px"
              }}
            >

              <span>

                <b>

                  {

                    msg.sender === "user"

                      ? "You"

                      : "AI"

                  }

                  :

                </b>

                {" "}

                {msg.text}

              </span>

            </div>

          ))

        }

        {

          loading &&

          <p>

            AI is typing...

          </p>

        }

      </div>

      {/* INPUT */}

      <input

        type="text"

        placeholder="Ask something..."

        value={question}

        onChange={(e) =>

          setQuestion(

            e.target.value

          )

        }

        style={{
          width: "70%",
          padding: "10px"
        }}

      />

      {/* BUTTON */}

      <button

        type="button"

        onClick={askQuestion}

        style={{
          marginLeft: "10px",
          padding: "10px"
        }}

      >

        Send

      </button>

    </div>

  );

}

export default Chatbot;