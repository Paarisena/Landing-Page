import "./CTA.css";

function CallToAction() {
  return (
    <>
      <article className="call-to-action text-white text-center">
        <section className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              <form className="form-subscribe">
                <div className="row">
                  <div className="col">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="form-control form-control-lg"
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
    </>
  );
}

export default CallToAction;
