import PropTypes from "prop-types";
import "./Testimonial.css";

function Testimony({ img, name, testimony }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
          <img src={img} alt={name} className="img-fluid rounded-circle mb-3" />
          <h5>{name}</h5>
          <p className="font-weight-light mb-0">{testimony}</p>
        </div>
      </div>
    </>
  );
}

Testimony.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  testimony: PropTypes.string,
};

export default Testimony;
