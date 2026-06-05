import { Link } from "react-router-dom";

function Navbar() {

  const logout = () => {

    localStorage.clear();

    window.location.href = "/login";
  };

  return (

    <div className="navbar">

      <h2>AI Career OS</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

        <Link to="/upload">
          Upload Resume
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/chatbot">
          Chatbot
        </Link>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;