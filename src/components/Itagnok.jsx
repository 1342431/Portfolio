import React from "react";
import { Link } from "react-router-dom";

const Itagnok = ({ location, setLocation }) => {
  return (
    <div className="itagnok-container">
      <span className="description">Developing relationships</span>
      <span className="description">Delivering results</span>
      <div className="itagnok-buttons">
        <Link to="/services" onClick={() => setLocation("services")}>
          <button type="submit" className="services-button">
            Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Itagnok;
