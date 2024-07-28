import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Itagnok from "./components/Itagnok";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  const [location, setLocation] = React.useState("home");

  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/" onClick={() => setLocation("home")}>
            <img
              className="logo"
              type="image/svg+xml"
              src="./assets/small.png"
              width="90"
              height="50"
            />
          </Link>
        </div>
        <div className="menu">
          {location === "contact" ? (
            <Link to="/services" onClick={() => setLocation("services")}>
              <button type="submit" className="contact-button">
                Services
              </button>
            </Link>
          ) : (
            <Link to="/contact" onClick={() => setLocation("contact")}>
              <button type="submit" className="contact-button">
                Contact us
              </button>
            </Link>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/"
          element={<Itagnok setLocation={setLocation} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
