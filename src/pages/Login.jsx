import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      const response = await axios.post(
        "https://ai-chat-backend-wtaf.onrender.com/login",
        {
          email,
          password
        }
      );

      // SAVE TOKEN

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      alert(
        response.data.message ||
        "Login Successful"
      );

    } catch (error) {

      alert("Login Failed");

    }

  };

  return (

    <div>

      <h2>Login Page</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={loginUser}>
        Login
      </button>

    </div>

  );

}

export default Login;