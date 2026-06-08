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
          email: email,
          password: password
        }
      );

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      alert("Login Successful");

      window.location.href = "/dashboard";

    }

    catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return (

    <div className="page-center">

      <div className="auth-card">

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to continue your AI career journey
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={loginUser}>
          Login
        </button>

      </div>

    </div>

  );

}

export default Login;