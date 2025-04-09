import React from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaPenNib } from 'react-icons/fa';
import { linkedIn, resumeLink, github, blog } from './myContent'; // Import your content here

function App() {
  return (
    <div className="container">
      <div className="intro-card">
        <h1>Hi, I'm <span className="highlight">Ayush Thakur</span></h1>
      </div>

      <div className="social-links">
        <a
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={blog}
          target="_blank"
          rel="noreferrer"
        >
          <FaPenNib /> Blog
        </a>
      </div>

      <a
        href={resumeLink}
        target="_blank"
        rel="noreferrer"
      >
        View Resume
      </a>
    </div>
  );
}



export default App;
