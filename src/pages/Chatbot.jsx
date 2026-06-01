const askQuestion = async () => {

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please Login First");
    return;
  }

  if (!question.trim()) return;

  const userMessage = question;

  setQuestion("");

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

    const aiReply = response?.data?.reply || "No response from AI";

    setChat((prev) => [
      ...prev,
      { sender: "ai", text: aiReply }
    ]);

  } catch (error) {
    console.log("ERROR:", error);

    setChat((prev) => [
      ...prev,
      { sender: "ai", text: "Server error. Please try again." }
    ]);

  }

  setLoading(false);
};