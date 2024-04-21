import "./hero.css";

function Hero() {
  return (
    <>
      <header className="masthead">
        <article className="container position-relative">
          <section className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">
                  Generate more leads with a professional landing page!
                </h1>
                <form className="form-subscribe" id="contactForm">
                  <div className="row">
                    <div className="col">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary btn-lg" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </article>
      </header>
    </>
  );
}

export default Hero;
