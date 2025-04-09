import React from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaPenNib, FaFileAlt } from 'react-icons/fa';
import { linkedIn, resumeLink, github, blog } from './myContent';

function App() {
  return (
    <div className="container">
      <div className="intro-card">
        <h1>Hi, I'm <span className="highlight">Ayush Thakur</span></h1>

        <div className="social-links">
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href={blog} target="_blank" rel="noreferrer">
            <FaPenNib /> Blog
          </a>
          <a href={resumeLink} target="_blank" rel="noreferrer">
            <FaFileAlt /> View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
