import React from 'react';

export default function LandingContainer() {
  return (
    <div className="landing-container ">
      <div className="row">
        <div className="left-col-img">
          <img alt="left-svg" src="/images/left-SVG.png" />
        </div>

        <div className="left-col-btns">
          <div className="sign-in-buttons">
            {/* <button className="email-button" type="submit">
              <img alt="icon-mat-email" src='/images/Iconmaterial-email.png' />
              <p>Sign in with email</p>
            </button> */}

            <button className="google-button" type="submit">
              <img
                alt="Icon-simple-google"
                src="/images/Icon-simple-google.png"
              />
              <p>Sign in with Google</p>
            </button>

            <button className="github-button" type="submit">
              <img
                alt="Icon-awesome-github.png"
                src="/images/Iconawesome-github.png"
              />
              <p>Sign in with Github</p>
            </button>
          </div>

          <div className="email-section">
            <h3>Sign in with email.</h3>
            <form className="email">
              <input
                type="email"
                className="email-input sign-in-input"
                placeholder="Email"
              />

              <div className="name">
                <input
                  type="text"
                  className="name-fname sign-in-input"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="name-lname sign-in-input"
                  placeholder="Last Name"
                />
              </div>

              <input
                type="password"
                className="password-input sign-in-input"
                placeholder="Choose password"
              />
              <div className="email-buttons">
                <button type="submit" className="email-submit">
                  Submit
                </button>
                <button type="submit" className="email-next">
                  Next
                </button>
                <button className="email-cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>

        <div className="home-right-col">
          <img alt="right-svg.png" src="/images/right-svg.png" />
        </div>
      </div>
    </div>
  );
}
