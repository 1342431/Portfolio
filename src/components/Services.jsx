import BankingLogo from "../assets/BankingLogo.png";
import DataAnalyticsLogo from "../assets/DataAnalyticsLogo.png"
import IotLogo from "../assets/IotLogo.png";
import MachineLearningLogo from "../assets/MachineLearningLogo.png"

const Services = () => {
  return (
    <div className="services-container">
      <div>
        <div className="flex-row">
          <img
            src={BankingLogo}
            width="150"
            height="100"
            className="servicesLogo"
          />
          <div>
            <h1>Banking & Payments</h1>
            <p>
              With vast experience in the technology used in banks and other
              financial institutions, we provide hassle free IT consulting in
              the finance sector.
            </p>
          </div>
        </div>
        <div className="flex-row">
          <img
            src={IotLogo}
            width="130"
            height="100"
            className="servicesLogo"
          />
          <div>
            <h1>Internet of Things</h1>
            <p>
              We extend seamless integration of sensors and other hardware using
              IoT for commercial clients.
            </p>
          </div>
        </div>
        <div className="flex-row">
          <img
            src={MachineLearningLogo}
            width="130"
            height="100"
            className="servicesLogo"
          />
          <div>
            <h1>Machine Learning</h1>
            <p>
              Our data science & ML experts propel your business forward by
              delivering crucial insights.
            </p>
          </div>
        </div>
        <div className="flex-row">
          <img
            src={DataAnalyticsLogo}
            width="100"
            height="100"
            className="servicesLogo"
          />
          <div>
            <h1>Data Analytics</h1>
            <p>
              We help you understand your data through superior data analysis
              techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
