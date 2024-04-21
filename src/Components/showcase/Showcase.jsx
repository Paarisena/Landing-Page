import PropTypes from "prop-types";
import "./Showcase.css";

function Showcase({ img, title, desc }) {
  return (
    <section className="row g-0">
      <div
        className="col-lg-6 ordedr-lg-2 text-white showcase-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="col-lg-6 order-lg-1 my-auto showcase-text">
        <h2>{title}</h2>
        <p className="lead mb-0">{desc}</p>
      </div>
    </section>
  );
}

Showcase.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Showcase;
