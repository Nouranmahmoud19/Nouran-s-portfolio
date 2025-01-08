import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiKaggle } from "react-icons/si"; // Importing Kaggle icon from react-icons

import "./App.css";

const About = () => (
  <div className="content">
    <h2>About</h2>
    <p>Hi, I’m Nouran Mahmoud, developer, and lifelong learner dedicated to advancing the field of artificial intelligence. With a background in deep learning, my focus lies in creating intelligent systems that solve real-world challenges.
      My journey into AI began through hands-on projects on Kaggle, where I honed my skills and learned the power of data-driven insights. 
      I specialize in deep learning techniques, model optimization, and AI-driven user experience design. I’m constantly exploring new methods and technologies to make AI more accessible and impactful.
    </p>
  </div>
);

const Resume = () => (
  <div className="content">
    <h2>Resume</h2>
    <p>
      Check out my resume <a href="https://drive.google.com/file/d/1ZM9zCa6KogroMqBLjjdEoxsZrqQf33hs/view?usp=drive_link" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  </div>
);

const Gallery = () => (
  <div className="content">
    <h2>Projects</h2>
    <p>Explore my Projects that aim to solve real-world problems.</p>

    <div className="project-grid">
      {/* Project 1 */}
      <div className="project-card" onClick={() => alert('Show Code for Project 1')}>
        <div className="project-image">
          <img src="/path/to/project1-image.jpg" alt="Project 1" />
        </div>
        <div className="project-info">
          <h3>Project 1</h3>
          <p>Short description of Project 1.</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card" onClick={() => alert('Show Code for Project 2')}>
        <div className="project-image">
          <img src="/path/to/project2-image.jpg" alt="Project 2" />
        </div>
        <div className="project-info">
          <h3>Project 2</h3>
          <p>Short description of Project 2.</p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card" onClick={() => alert('Show Code for Project 3')}>
        <div className="project-image">
          <img src="/path/to/project3-image.jpg" alt="Project 3" />
        </div>
        <div className="project-info">
          <h3>Project 3</h3>
          <p>Short description of Project 3.</p>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project-card" onClick={() => alert('Show Code for Project 4')}>
        <div className="project-image">
          <img src="/path/to/project4-image.jpg" alt="Project 4" />
        </div>
        <div className="project-info">
          <h3>Project 4</h3>
          <p>Short description of Project 4.</p>
        </div>
      </div>
    </div>
  </div>
);

const Certificates = () => (
  <div className="content">
    <h2>Certificates</h2>
    <p>A showcase of my certifications in AI, deep learning, and related fields, demonstrating my expertise and commitment to learning.</p>
  </div>
);

const Contact = () => (
  <div className="content">
    <h2>Contact</h2>
    <p>Feel free to reach out to me via email at <a href="mailto:nouranmahmoud243@gmail.com">nouranmahmoud243@gmail.com</a> or connect with me on LinkedIn.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="navbar">
          <div className="logo">Nouran Mahmoud</div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/gallery">Projects</Link></li>
              <li><Link to="/certificates">Certificates</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="hero">
          <div className="text-section">
            <h1>
              <span className="highlight">AI Developer </span>
            </h1>
            <p className="Creative">Hi, I'm Nouran Mahmoud</p>
            <p>
              AI Developer, I specialize in transforming data into powerful, intelligent systems that solve real-world challenges. With expertise in deep learning, I craft AI solutions that enhance efficiency, improve decision-making.
            </p>
            <p className="bold-text">
              Bringing Intelligence to Life through AI.
            </p>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/nouran-mahmoud-986053252/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://www.kaggle.com/nouranmahmoudd" target="_blank" rel="noopener noreferrer">
                <SiKaggle className="social-icon" />
              </a>
              <a href="mailto:nouranmahmoud243@gmail.com">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>

          <div className="image-section">
            <img
              src="/photo2.jpg" // Referencing the image in the public folder
              alt="Nouran Mahmoud"
              className="profile-image"
            />
          </div>
        </main>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
