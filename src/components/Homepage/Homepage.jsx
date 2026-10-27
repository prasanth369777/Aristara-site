import React from "react";

// Homepage Components
import HERO from "../Homepage/Hero";
import Residentialconstruction from "../Homepage/Rc";
import About from "../Homepage/Aboutus";
import Interiordesign from "../Homepage/Interiordesign";
import Jointventure from "../Homepage/Jointventure";
import Blog1 from "../Homepage/Blog1";
import Projects from "../Homepage/Projects";
import Ourprocess from "../Homepage/Ourprocess";
import Contactus from "../Homepage/Contact";

const Home = () => {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#fbf8f1] text-[#29261f]">

      {/* Hero Section */}
      <HERO />

      {/* About Section */}
      <About />

      {/* Residential Construction */}
      <Residentialconstruction />

      {/* Interior Design */}
      <Interiordesign />

      {/* Joint Venture */}
      <Jointventure />

      {/* Projects */}
      <Projects />

      {/* Our Process */}
      <Ourprocess />

      {/* Blog Section */}
      <Blog1 />

      {/* Contact Section */}
      <Contactus />

    </main>
  );
};

export default Home;