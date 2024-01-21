import React from "react";
import "./MyTimeLine.css";

const MyTimeLine = () => {
  return (
    <div id="work" >
      <div className="text-4xl font-bold text mb-5">
        <span>MY</span> <span className="text-blue-400">Work Experience</span>
      </div>
      <section id="cd-timeline" className="cd-container">
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>GTCSYS Pvt Ltd</h2>
            <div className="timeline-content-info">
              <span className="timeline-content-info-title">
                <i className="fa fa-certificate" aria-hidden="true" />
                Front End Developer
              </span>
              <span className="timeline-content-info-date">
                <i className="fa fa-calendar-o" aria-hidden="true" />
                July 2022 - Present
              </span>
            </div>
            <p>
              Working alongside the designer team implementing the designs, also
              developing custom solutions to address team necessities.
            </p>
            <ul className="content-skills">
              <li>React js</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>CSS3</li>
              <li>HTML5</li>
            </ul>
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>MindInventory</h2>
            <div className="timeline-content-info">
              <span className="timeline-content-info-title">
                <i className="fa fa-certificate" aria-hidden="true" />
                Web Developer
              </span>
              <span className="timeline-content-info-date">
                <i className="fa fa-calendar-o" aria-hidden="true" />
                August 2021 - June 2022
              </span>
            </div>
            <p>
              Working alongside the designer team implementing the designs, also
              developing custom solutions to address team necessities.
            </p>
            <ul className="content-skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>SCSS</li>
            </ul>
          </div>{" "}
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>Nethuts Solution</h2>
            <div className="timeline-content-info">
              <span className="timeline-content-info-title">
                <i className="fa fa-certificate" aria-hidden="true" />
                Web Developer Internship
              </span>
              <span className="timeline-content-info-date">
                <i className="fa fa-calendar-o" aria-hidden="true" />
                Nov 2020 - Jan 2021
              </span>
            </div>
            <p>
              Working alongside the designer team implementing the designs, also
              developing custom solutions to address team necessities.
            </p>
            <ul className="content-skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>UI Design</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyTimeLine;
