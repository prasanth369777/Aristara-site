import React from "react";

// Homepage Components
import HERO from "./Hero";
import Residentialconstruction from "./Rc";
import About from "./Aboutus";
import Interiordesign from "./Interiordesign";
import Jointventure from "./Jointventure";
import Blog1 from "./Blog1";
import Projects from "./Projects";
import Ourprocess from "./Ourprocess";
import Contactus from "./Contact";

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