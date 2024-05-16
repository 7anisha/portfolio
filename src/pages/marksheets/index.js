import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Marksheets = () => {
  return (
    <HelmetProvider>
      <section id="marksheets" className="marksheets">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Marksheets </title>
          <meta name="description" content="Marksheets page" />
        </Helmet>
        <div className="marksheets-content">
          <h1>My Marksheets</h1>
          <div className="marksheets-pdf">
            <iframe
              title="Marksheets PDF"
              src="./images/marksheets.pdf"
              width="100%"
              height="500px"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
