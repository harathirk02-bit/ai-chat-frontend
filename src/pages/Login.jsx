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

      console.log(response.data);

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

    <div>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={loginUser}>
        Login
      </button>

    </div>

  );

}

export default Login;