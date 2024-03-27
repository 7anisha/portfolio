import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

export const Resume = () => {
  return (
    <HelmetProvider>
      <section id="resume" className="resume">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Resume</title>
          <meta name="description" content="Resume page" />
        </Helmet>
        <div className="resume-content">
          <h1>Hello!! This is my Resume</h1>
          <div className="resume-image">
            <img src="./images/resume1.jpg" alt="Resume" />
            {/* <img src="./images/resume2.jpg" alt="Resume" /> */}
          </div>
          <div className="resume-image">
            <img src="./images/resume2.jpg" alt="Resume" />
            {/* <img src="./images/resume2.jpg" alt="Resume" /> */}
          </div>
          <div className="resume-pdf">
            <h2>Download Resume</h2>
            <a href="./images/AnishaRani_PIET21CS021.pdf" download>
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
