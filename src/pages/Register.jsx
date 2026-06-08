import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {

    try {

      await axios.post(
        "https://ai-chat-backend-wtaf.onrender.com/register",
        {
          name,
          email,
          password
        }
      );

      alert("Registration Successful");

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data?.detail ||
        error?.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <div className="page-center">

      <div className="auth-card">

        <h1>Create Account</h1><br />
        <label>name:</label>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <label>email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <label>password:</label>

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button onClick={registerUser}>
          Register
        </button>

      </div>

    </div>

  );

}

export default Register;