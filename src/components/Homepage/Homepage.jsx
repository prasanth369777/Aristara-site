
import React from "react";

import HERO from "../Homepage/Hero";
import RESIDENTIALCONSTRUCTION from "./RESIDENTIALCONSTRUCTION";
import About from "./ABOUT";
import INTERIORDESIGN from "./INTERIORDESIGN ";
import JOINTVENTURE from "./JOINTVENTURE";
import BLOG1 from "./BLOG1";
import PROJECTS from "../Homepage/PROJECTS";
import OURPROCESS from "./OURPROCESS ";
import CONTACTUS from "../Homepage/Contact";

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
      <RESIDENTIALCONSTRUCTION />

      {/* Interior design */}
      <INTERIORDESIGN />

      {/* Joint venture */}
      <JOINTVENTURE />

      {/* Projects */}
      <PROJECTS />

      {/* Our process */}
      <OURPROCESS />

      {/* Blog */}
      <BLOG1 />

      {/* Contact */}
      <CONTACTUS />
    </main>
  );
}
