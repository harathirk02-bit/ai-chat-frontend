import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [question, setQuestion] = useState("");

  const [reply, setReply] = useState("");

  const askQuestion = async () => {

    const token = localStorage.getItem("token");

    if(!token){

      alert("Please Login First");

      return;

    }

    try {

      const response = await axios.get(

        "https://ai-chat-backend-wtaf.onrender.com/chatbot",

        {

          params:{

            question:question

          },

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );

      setReply(

        response.data.response.reply

      );

    }

    catch(error){

      console.log(error);

      alert("Chatbot Error");

    }

  };

  return (

    <div>

      <h2>AI Career Chatbot</h2>

      <input

        type="text"

        placeholder="Ask Question"

        value={question}

        onChange={(e)=>

          setQuestion(

            e.target.value

          )

        }

      />

      <br /><br />

      <button

        onClick={askQuestion}

      >

        Ask AI

      </button>

      <br /><br />

      <h3>

        {reply}

      </h3>

    </div>

  );

}

export default Chatbot;