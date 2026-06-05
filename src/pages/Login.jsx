import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      await axios.post(
        "https://ai-chat-backend-gn18.onrender.com/api/auth/login",
        {
          email: email,
          password: password
        }
      );

      alert("Login Successful");

      // Store Token
      localStorage.setItem(
        "token",
        response.data.access_token
      );

      alert("Login Successful");

    }

    catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return (

    <div className="page-center">

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginUser}>
          Login
        </button>

      </div>

    </div>

  );

}

export default Login;