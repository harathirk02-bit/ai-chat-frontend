import { Link } from "react-router-dom";
import robot from "../assets/robot.jpeg";

function Home() {

  return (

    <div className="hero">

      <div className="hero-content">

        <div className="hero-text">

          <span className="tag">
            AI Powered Career Platform
          </span>

          <h1>
            Build Your Future <br />
            With Smart AI Career Guidance
          </h1>

          <p>
            Upload your resume, get AI-powered resume
            analysis, personalized interview questions,
            career recommendations, and job preparation
            support in one platform.
          </p>

          <div className="hero-buttons">

            <Link to="/register">

              <button className="primary-btn">
                Get Started
              </button>

            </Link>

            <Link to="/upload">

              <button className="secondary-btn">
                Upload Resume
              </button>

            </Link>

          </div>

          <div className="stats">

            <div className="stat-box">
              <h2>AI</h2>
              <p>Resume Analysis</p>
            </div>

            <div className="stat-box">
              <h2>24/7</h2>
              <p>Career Assistant</p>
            </div>

            <div className="stat-box">
              <h2>100+</h2>
              <p>Interview Questions</p>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={robot}
            alt="AI Career"
          />

        </div>

      </div>

    </div>
  );
}

export default Home;