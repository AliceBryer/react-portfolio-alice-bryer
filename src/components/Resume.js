import * as React from "react";
// const cv = require()

const resume = () => {
  return (
    <div className="container">
      <div className="Resume">
        <h1>Resume</h1>
        <h2>
          <a
            href="www.google.com"
            // rel="noreferrer"
            // href={cv}
            // download="Alice Bryer-CV"
            // target="_blank"
          >
            Download my CV!
          </a>
        </h2>
      </div>
      <div className="Skills">
        <h1>Skills and Technologies</h1>
        <ul>
          <li>HTML, CSS and JS</li>
          <li>Server-side and third party api's</li>
          <li>Node.js</li>
          <li>OOP</li>
          <li>Express</li>
          <li>SQL</li>
          <li>ORM</li>
          <li>MVC</li>
          <li>CS</li>
          <li>MongoDB</li>
          <li>PWA</li>
          <li>React</li>
          <li>MERN</li>
          <li>State</li>
        </ul>
      </div>
    </div>
  );
};

export default resume;
