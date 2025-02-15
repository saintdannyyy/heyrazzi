import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
import SignUp from "./pages/SignUp";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100); // Small delay
  }, []);

  if (!isLoaded) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div>
      <div className="container"> {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </div>
  );
};
export default App;