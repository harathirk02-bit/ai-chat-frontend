function Dashboard() {

  const data = JSON.parse(
    localStorage.getItem("resumeData")
  );

  return (

    <div className="dashboard-page">

      <div className="dashboard-header">

        <div>

          <h1>
            AI Career Dashboard
          </h1>

          <p>
            Track your resume performance,
            interview preparation, and career growth.
          </p>

        </div>

      </div>

      {
        !data ? (

          <div className="empty-dashboard">

            <h2>
              No Resume Uploaded
            </h2>

            <p>
              Upload your resume to get
              AI-powered analysis.
            </p>

          </div>

        ) : (

          <>

            <div className="dashboard-grid">

              <div className="dashboard-card">

                <h3>Resume Score</h3>

                <h2>{data.score}</h2>

                <p>
                  ATS Resume Performance
                </p>

              </div>

              <div className="dashboard-card">

                <h3>Recommended Role</h3>

                <h2>{data.role}</h2>

                <p>
                  Based on your resume
                </p>

              </div>

              <div className="dashboard-card">

                <h3>Strengths</h3>

                <p>{data.strengths}</p>

              </div>

              <div className="dashboard-card">

                <h3>Need Improvement</h3>

                <p>{data.improvement}</p>

              </div>

            </div>

            <div className="dashboard-sections">

              <div className="section-box">

                <h2>
                  Interview Questions
                </h2>

                {
                  data.questions.map(
                    (q, index) => (

                      <div
                        className="question-box"
                        key={index}
                      >

                        {q}

                      </div>
                    )
                  )
                }

              </div>

              <div className="section-box">

                <h2>
                  Recommended Jobs
                </h2>

                <div className="job-item">

                  <h3>
                    Frontend Developer
                  </h3>

                  <p>
                    React • JavaScript • UI
                  </p>

                  <a
                    href="https://www.linkedin.com/jobs/"
                    target="_blank"
                    rel="noreferrer"
                  >

                    <button>
                      Apply Now
                    </button>

                  </a>

                </div>

                <div className="job-item">

                  <h3>
                    React Developer Intern
                  </h3>

                  <p>
                    Frontend • Internship
                  </p>

                  <a
                    href="https://www.naukri.com/"
                    target="_blank"
                    rel="noreferrer"
                  >

                    <button>
                      Apply Now
                    </button>

                  </a>

                </div>

              </div>

            </div>

          </>

        )
      }

    </div>
  );
}

export default Dashboard;