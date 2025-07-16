import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-lg xl:w-2xl text-center md:text-left">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hey! I’m Mohammad Sajib — a dedicated <strong>Backend Developer</strong> with a strong focus on performance, scalability, and real-time functionality. I specialize in building powerful APIs, structuring reliable databases, and creating seamless backend systems.
            <br /><br />
            My main tech stack includes:{" "}
            <a className="text-[#4ECCA3] px-1" href="https://nodejs.org/en/">Node.js</a>,{" "}
            <a className="text-[#4ECCA3] px-1" href="https://expressjs.com/">Express</a>,{" "}
            <a className="text-[#4ECCA3] px-1" href="https://www.mongodb.com/">MongoDB</a>,{" "}
            <a className="text-[#4ECCA3] px-1" href="https://mongoosejs.com/">Mongoose</a>,{" "}
            <a className="text-[#4ECCA3] px-1" href="https://firebase.google.com/">Firebase</a>, and{" "}
            <a className="text-[#4ECCA3] px-1" href="https://socket.io/">Socket.IO</a>.
            I also work with{" "}
            <a className="text-[#4ECCA3] px-1" href="https://reactjs.org/">React</a> and{" "}
            <a className="text-[#4ECCA3] px-1" href="https://tailwindcss.com/">Tailwind CSS</a> when needed.
            <br /><br />
            I'm passionate about <strong>real-time applications</strong>, <strong>API design</strong>, <strong>authentication systems</strong>, and <strong>transaction-safe backend architectures</strong>. I love solving complex logic problems, optimizing queries, and ensuring data integrity.
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
