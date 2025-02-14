import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
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