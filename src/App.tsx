import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import ContactUs from "./pages/contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
