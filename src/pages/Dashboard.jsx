import React from "react";

function Dashboard() {
  const resumeData = JSON.parse(localStorage.getItem("resumeData"));

  console.log("Dashboard Resume Data:", resumeData);

  if (!resumeData) {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="card">
          <h2>No Resume Uploaded</h2>

          <p>
            Upload your resume to get AI analysis,
            interview questions, and career guidance.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Career Dashboard</h1>

      <div className="card-grid">
        <div className="card">
          <h2>Resume Score</h2>
          <p>{resumeData.score || "N/A"}</p>
        </div>

        <div className="card">
          <h2>Recommended Role</h2>
          <p>{resumeData.role || "N/A"}</p>
        </div>

        <div className="card">
          <h2>Strengths</h2>
          <p>{resumeData.strengths || "N/A"}</p>
        </div>

        <div className="card">
          <h2>Areas to Improve</h2>
          <p>{resumeData.improvement || "N/A"}</p>
        </div>
      </div>

      <div className="section">
        <h2>Interview Questions</h2>

        {resumeData.questions && resumeData.questions.length > 0 ? (
          <ul>
            {resumeData.questions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        ) : (
          <p>No interview questions available.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;