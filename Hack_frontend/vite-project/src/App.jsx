import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import CodeBackground from "./components/CodeBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Event from "./pages/Event";
import Hackathons from "./pages/Hackathons";
import Loder from "./components/Loder"; // Import Loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the loader for 5-6 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Change to 6000 for 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loder />
  ) : (
    <>
      <CodeBackground id="particles" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/hackthon" element={<Hackathons />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

