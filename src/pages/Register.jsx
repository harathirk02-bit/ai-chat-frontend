import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const registerUser = async () => {

    try {

      const response = await axios.post(
        "https://ai-chat-backend-gn18.onrender.com/register",
        {
          name,
          email,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log(response.data);

      alert(
        response.data.message ||
        "Registration Successful"
      );

    }

    catch (error) {

      console.log("ERROR:", error);

      alert(
        error?.response?.data?.detail ||
        error?.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <div>

      <h2>Register Page</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={registerUser}>
        Register
      </button>

    </div>

  );

}

export default Register;
