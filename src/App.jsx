import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/hero";
import { features, showcaseData, testimonialData } from "./data";
import Features from "./Components/Features/Features";
import Showcase from "./Components/showcase/Showcase";
import Testimony from "./Components/Testimonials/Testimonial";
import CallToAction from "./Components/calltoaction/CTA";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="features-icons bg-light text-center">
        <section className="container">
          <div className="row">
            {features.map((feature) => (
              <Features
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>
        </section>
      </section>
     <section className="showcase">
        <div className="container-fluid p-0">
          {showcaseData.map((data) => (
            <Showcase
              key={data.id}
              img={data.img}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </section>
      
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            {testimonialData.map((testimony) => (
              <Testimony
                key={testimony.id}
                img={testimony.img}
                name={testimony.name}
                testimony={testimony.testimony}
              />
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
