import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-lg xl:w-2xl text-center md:text-left">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Mohammad Sajib, a passionate Full-Stack Developer and Backend Specialist, with a focus on building scalable and robust web solutions. I specialize in technologies like{" "}
            <a className="text-[#4ECCA3] px-2" href="https://reactjs.org/">React</a>,{" "}
            <a className="text-[#4ECCA3] px-2" href="https://nodejs.org/en/">Node.js</a>,{" "}
            <a className="text-[#4ECCA3] px-2" href="https://expressjs.com/">Express</a>, and{" "}
            <a className="text-[#4ECCA3] px-2" href="https://www.mongodb.com/">MongoDB</a>. I also have extensive experience in <a className="text-[#4ECCA3] px-2" href="https://tailwindcss.com/">Tailwind CSS</a> and building efficient REST APIs.
            I’m passionate about automating workflows and creating seamless development processes. Currently, I’m focused on expanding my skills in DevOps and cloud engineering to deliver more efficient and scalable applications.
            I'm always seeking opportunities to contribute to the open-source community and to help others by sharing knowledge and creating innovative tools for developers.
          </p>
        </div>
        <div className="image-container flex justify-center md:justify-start mt-8 md:mt-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 md:w-72 md:h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
