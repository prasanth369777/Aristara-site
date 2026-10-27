
import React, { Suspense} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/pages/Footer";
import ScrollToTop from "./components/pages/ScrollToTop";
import MouseConstruction from "./components/pages/MouseConstruction";

// Lazy-load pages when you add them
// const Aboutus = lazy(() => import("./components/pages/Aboutpage"));
// const Contact = lazy(() => import("./components/pages/Contactpage"));

function PageLoader() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center bg-[#fbf8f1]"
      role="status"
      aria-label="Loading page"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#e8dfd2] border-t-[#c99a29]" />
    </div>
  );
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <MouseConstruction />

      <Suspense fallback={<PageLoader />}>
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Homepage />} />

            {/* Enable these routes when their page components are ready */}
            {/* <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} /> */}

          </Routes>
        </main>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
