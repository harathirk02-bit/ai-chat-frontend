import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="navbar">

      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/upload">Upload Resume</Link>

      <Link to="/roadmap">Roadmap</Link>

      <Link to="/chatbot">Chatbot</Link>

    </div>
  );
}

export default Navbar;