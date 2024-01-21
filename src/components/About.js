import React from "react";

const About = () => {
  return (
    <div id="about" className="w-8/12 m-auto pt-4">
      <h2 className="text-4xl font-bold text">
        ABOUT <span className="text-blue-400">ME</span>
      </h2>
      <div className="flex items-center justify-between pt-4 pb-8">
        <div className="profile-container">
          <img src="images/profileImg.jpg" alt="Profile-pic" className="object-cover profile" />
        </div>
        <div className="text-xl font-bold text text-left">
          Hi Everyone, I,m <span className="text-blue-400 ">Shivani Trivedi
          </span> from <span className="text-blue-400">Jhansi, Uttar Pradesh (India).</span>
          <span className="block">I have completed my Master's in Computer Science</span>from <span className="text-blue-400">Bundelkhand University, Jhansi , Uttar Pradesh (UP)</span>.Then I joined a Web
          development course by <span className="text-blue-400">Naresh IT Technology Hyderabad</span>.
        </div>
      </div>
    </div>
  );
};

export default About;
