const Signup = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-semibold">
            Open a free demat and trading account online
          </h2>
          <p className="text-muted fs-5">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
          <div className="row align-items-center mt-5">
            <div className="col-md-7">
              <img
                src="/media/images/signup.png"
                alt="Hero"
                className="img-fluid"
              />
            </div>
            <div className="col-md-5">
              <div className="card shadow-sm p-4">
                <h5 className="fw-semibold">Signup now</h5>
                <p className="text-muted small">
                  Or track your existing application
                </p>
                <div className="d-flex align-items-center border rounded p-2 mb-3">
                  <span className="me-2">🇮🇳 +91</span>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="form-control border-0"
                  />
                </div>
                <button className="btn btn-primary w-100">Get OTP</button>
                <p className="small text-muted mt-2">
                  By proceeding, you agree to the Zerodha{" "}
                  <a href="#" className="text-decoration-none">
                    terms
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-decoration-none">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fw-semibold mb-4">
            Investment options with Zerodha demat account
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <h5>📈 Stocks</h5>
              <p>Invest in all exchange-listed securities</p>
            </div>
            <div className="col-md-6">
              <h5>📊 Mutual funds</h5>
              <p>Invest in commission-free direct mutual funds</p>
            </div>
            <div className="col-md-6">
              <h5>📝 IPO</h5>
              <p>Apply to the latest IPOs instantly via UPI</p>
            </div>
            <div className="col-md-6">
              <h5>📉 Futures & options</h5>
              <p>Hedge and mitigate market risk through simplified F&O trading</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary">Explore Investments</button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center fw-semibold mb-5">
            Steps to open a demat account with Zerodha
          </h3>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/media/images/console.png"
                alt="Steps"
                className="img-fluid"
                style={{width:"70%"}}
              />
            </div>
            <div className="col-md-6">
              <ol className="fs-2">
                <li className="mb-5">Enter the requested details</li>
                <li className="mb-5">Complete e-sign & verification</li>
                <li className="mb-5">Start investing!</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/media/images/largestBroker.svg"
                alt="Benefits"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-semibold">
                Benefits of opening a Zerodha demat account
              </h3>
              <ul className="mt-3">
                <li>
                  <strong>Unbeatable pricing:</strong> ₹0 for equity &
                  commission-free mutual funds. Flat ₹20 for intraday and F&O
                  trades.
                </li>
                <li>
                  <strong>Best investing experience:</strong> Simple and
                  intuitive trading platform.
                </li>
                <li>
                  <strong>No spam or gimmicks:</strong> Transparent — no spam,
                  “gamification” or intrusive push notifications.
                </li>
                <li>
                  <strong>The Zerodha universe:</strong> Free access to our
                  partner products.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center fw-semibold mb-5">
            Explore different account types
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-3 h-100 shadow-sm">
                <h6>Individual Account</h6>
                <p>Invest in equity, mutual funds, and derivatives</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 h-100 shadow-sm">
                <h6>HUF Account</h6>
                <p>Make tax-efficient investments for your family</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 h-100 shadow-sm">
                <h6>NRI Account</h6>
                <p>Invest in equity, mutual funds, debentures, and more</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 h-100 shadow-sm">
                <h6>Minor Account</h6>
                <p>
                  Teach your little ones about money & invest for their future
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 h-100 shadow-sm">
                <h6>Corporate / LLP / Partnership</h6>
                <p>Manage your business surplus and investments easily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fw-semibold mb-4">FAQs</h3>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  What is a Zerodha account?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  A Zerodha account allows you to invest in equity, mutual
                  funds, bonds, IPOs, and more.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  What documents are required to open a demat account?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  PAN, Aadhaar, bank proof, and a photo are required to open an
                  account.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Is Zerodha account opening free?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Account opening is free. Some services may have small charges.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                >
                  Are there any maintenance charges?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse">
                <div className="accordion-body">
                  There are minimal annual maintenance charges for your demat
                  account.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                >
                  Can I open a demat account without a bank account?
                </button>
              </h2>
              <div id="faq5" className="accordion-collapse collapse">
                <div className="accordion-body">
                  No, you need a valid bank account linked to your demat account.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h3 className="fw-semibold">Open a Zerodha account</h3>
          <p className="text-muted fs-5">
            Simple and intuitive apps - ₹0 for investments + ₹20 for intraday
            and F&O trades.
          </p>
          <button className="btn btn-primary">Signup for free</button>
        </div>
      </section>
    </>
  );
};

export default Signup;
