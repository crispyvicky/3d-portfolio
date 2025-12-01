import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 1 — Early Journey */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self-Learning & Skill Building</h4>
                <h5>Personal Journey</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Started my journey exploring code, design, and 3D. Experimented
              with tools, built passion projects, learned modern web
              technologies, and discovered my love for building experiences that
              feel alive and interactive.
            </p>
          </div>

          {/* 2 — Freelance Growth */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer & 3D Interactive Designer</h4>
                <h5>Independent</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Delivered full-stack websites, brand identities, product concepts,
              and 3D interactive experiences. Worked with clients across
              different domains, improving my problem-solving, UI/UX thinking.
            </p>
          </div>

          {/* 3 — Founder Stage */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder, Full-Stack Developer & Creative Technologist</h4>
                <h5>Bravoo — Software & Digital Experience Studio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently building Bravoo, a modern software development and
              interactive design company focused on high-performance websites,
              creative digital branding, and immersive 3D experiences.
              Leading the development of <strong>HyperKlonk</strong> — a new
              AI-powered digital experience framework inside Bravoo.in that
              blends design, intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
