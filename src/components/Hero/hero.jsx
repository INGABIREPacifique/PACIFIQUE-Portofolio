import React, { useState } from "react";
import "./hero.css";
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Hero = () => {
  // If you want to keep showing/hiding Resume button, keep this state, else remove it.
  const [showResume, setShowResume] = useState(true);

  const socialMediaLinks = {
    github: "https://github.com/sergekamanzi",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://twitter.com",
  };

  return (
    <div className="main-hero">
      <h6>Hi! My name is</h6>
      <h1>
        INGABIRE PACIFIQUE.
        <br />
        I work with startups and brands.
      </h1>
      <p>
        3x Salesforce Certified Administrator | CRM Platform Specialist | Virtual Assistant | Medical Interpreter | Sales & Business Development | ALX Alumni & McKinsey Champion | Trailhead Ranger | Tech Enthusiast.
      </p>
    {showResume && (
  <a
    href="/INGABIRE Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    <IoMdDownload /> Resume
  </a>
)}

      <div className="social-media">
        <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
          <RiInstagramFill />
        </a>
        <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Hero;