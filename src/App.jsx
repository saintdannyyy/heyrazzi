import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100); // Small delay
  }, []);

  if (!isLoaded) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-white z-10"> {/* Fixed header */}
        <Header />
      </div>
      <div className="container"> {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;