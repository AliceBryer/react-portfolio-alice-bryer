import * as React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import cv from "../assets/AliceBryer-Resume.pdf";

const Resume = () => {
  return (
    <div className="container">
      <div className="Resume">
        <h1>Download my CV</h1>
        <a href={cv} download>
          <DownloadIcon
            sx={{ fontSize: 100, display: { xs: "none", md: "flex" }, mr: 1 }}
          />
        </a>
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

export default Resume;
