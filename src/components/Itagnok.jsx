import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Itagnok = ({ setLocation }) => {
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

Itagnok.propTypes = {
  setLocation: PropTypes.func.isRequired
};

export default Itagnok;
