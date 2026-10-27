
import React from "react";

import HERO from "../Homepage/Hero";
import Residentialconstruction from "./Rc";
import About from "./Aboutus";
import Interiordesign from "./Interiordesign";
import Jointventure from "./Jointventure";
import Blog1 from "./Blog1";
import Projects from "./Projects";
import Ourprocess from "./Ourprocess";
import Contactus from "../Homepage/Contact";

// Uncomment if you want to display the services marquee
// import Infinityscroll from "../Homepage/infinityscrolling";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#fbf8f1] text-[#29261f]">
      {/* Hero */}
      <HERO />

      {/* Services marquee */}
      {/* <Infinityscroll /> */}

      {/* About */}
      <About />

      {/* Residential construction */}
      <Residentialconstruction />

      {/* Interior design */}
      <Interiordesign />

      {/* Joint venture */}
      <Jointventure />

      {/* Projects */}
      <Projects />

      {/* Our process */}
      <Ourprocess />

      {/* Blog */}
      <Blog1 />

      {/* Contact */}
      <Contactus />
    </main>
  );
}
