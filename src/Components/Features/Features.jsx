import PropTypes from "prop-types";
import "./Features.css";

function Features({ icon, title, desc }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <div className="features-icons-icon d-flex">
            <i className={`${icon} m-auto text-primary`}></i>
          </div>
          <h3>{title}</h3>
          <p className="lead mb-0">{desc}</p>
        </div>
      </div>
    </>
  );
}

Features.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Features;
