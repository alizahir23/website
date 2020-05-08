import React, { Component } from 'react';
import Footer from '../components/Footer';
import AboutUs from '../components/Home/AboutUs';
import HowContainer from '../components/Home/HowContainer';
import LandingContainer from '../components/Home/LandingContainer';
import WelcomeComponent from '../components/Home/WelcomeComponent';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <WelcomeComponent />
        <LandingContainer />
        <AboutUs />
        <HowContainer />
        <Footer />
      </div>
    );
  }
}

export default Home;
