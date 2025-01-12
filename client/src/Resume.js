import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Sai Sathyak Nallamalli</h1>
        <p>8935 160th Ave NE, Redmond, WA 98052 | +1 4753080260 | nallamallisaisathyak9.com</p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle USA | Dec 2025</p>
          <p>GPA: 4.0/4.0</p>
          <h3>Bachelor of Technology in Computer Science</h3>
          <p>Ace Engineering College, Ghatkesar India | 2016-2020</p>
          <p>GPA: 3.7/4.0</p>
          <section class="skills">
  <h2>Skills</h2>

  <div class="skill-category">
    <h3>Programming Languages</h3>
    <p>Python, Java, C, SQL, HTML/CSS/JavaScript</p>
  </div>

  <div class="skill-category">
    <h3>Cloud Technologies</h3>
    <p>AWS, Azure</p>
  </div>

  <div class="skill-category">
    <h3>Tools & Technologies</h3>
    <p>SmartCOMM (Advanced Template Designer, Data Modeler), MessagePoint, Thunderhead, DevExpress, Github</p>
  </div>

  <div class="skill-category">
    <h3>Testing</h3>
    <p>Manual and Automated Testing, Agile Testing, Functional Acceptance Testing</p>
  </div>

  <div class="skill-category">
    <h3>Software Development</h3>
    <p>Responsive Layouts, Data Integration, Interactive Communication Systems</p>
  </div>

  <div class="skill-category">
    <h3>Frameworks</h3>
    <p>Embedded Systems, Ionic Platform</p>
  </div>

  <div class="skill-category">
    <h3>Full-Stack Development</h3>
    <p>Node.js, React, Django</p>
  </div>

  <div class="skill-category">
    <h3>Other Skills</h3>
    <p>
      Data Analytics, Quality Assurance, Requirements Documentation, AI (TensorFlow, Scikit-learn, Data Analysis, Automation),
      Machine Learning, DevOps, IoT, Python Development
    </p>
  </div>
</section>
<section class="projects">
  <h2>Projects</h2>

  <div class="project">
    <h3>Virtual Mouse Using Webcam</h3>
    <p>
      Built a hands-free navigation system using OpenCV and Python, incorporating advanced gaze detection.
    </p>
  </div>

  <div class="project">
    <h3>Parking Lot Web Application</h3>
    <p>
      Developed a vehicle management application with MySQL integration for efficient parking operations.
    </p>
  </div>

  <div class="project">
    <h3>Smart Band for Senior Citizens</h3>
    <p>
      Created a gesture-based communication device enabling easy interaction for elderly users.
    </p>
  </div>

  <div class="project">
    <h3>Smart Healthcare Kit (QUEPILL)</h3>
    <p>
      Automated medication management with alarm reminders and SMS alerts for timely medication.
    </p>
  </div>

  <div class="project">
    <h3>Agricultural Security System</h3>
    <p>
      Designed a laser-triggered alarm system to protect crops with real-time alerts.
    </p>
  </div>
</section>

        </div>
      </section>
    </div>
  );
};
export default Resume;
<section className="section">
  <h2>Projects</h2>
  <div className="projects">
    <h3>Personal Website</h3>
    <p>
      Built a personal website using React and deployed it on GitHub Pages
    </p>
    <p>
      Source code:{" "}
      <a
        href="https://github.com/studentname/personal-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/studentname/personal-website
      </a>
    </p>

    <h3>Online Bookstore</h3>
    <p>
      Developed a web application for an online bookstore using Spring Boot and MySQL
    </p>
    <p>
      Source code:{" "}
      <a
        href="https://github.com/studentname/online-bookstore"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/studentname/online-bookstore
      </a>
    </p>
  </div>
</section>
