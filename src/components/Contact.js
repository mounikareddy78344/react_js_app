import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to TechCorp</h1>
      <p>We build scalable web applications and enterprise solutions.</p>

      <div className="cards">
        <div className="card">
          <h3>Web Development</h3>
          <p>Modern responsive websites using latest technologies.</p>
        </div>
        <div className="card">
          <h3>Mobile Apps</h3>
          <p>Android & iOS applications with high performance.</p>
        </div>
        <div className="card">
          <h3>Cloud Solutions</h3>
          <p>Deploy and manage applications securely in cloud.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;