import React from 'react';
import '../App.css';


class MiddleSection extends React.Component {

    render() {
      return (
        <section id="features">
    <div className="row">
      <div className="features-box col-lg-4">
        <i className="icons fas fa-check-circle fa-4x"></i>
        <h3>Easy to use.</h3>
        <p className="features-paragraph">Hi, my name is adarsh kumar gupta.</p>
      </div>
      <div className="features-box col-lg-4">
        <i className="icons fas fa-bullseye fa-4x"></i>
        <h3>Elite Clientele</h3>
        <p className="features-paragraph">Hi, my name is adarsh kumar gupta.I am a vampire.</p>
      </div>
      <div className="features-box col-lg-4">
        <i className="icons fas fa-heart fa-4x"></i>
        <h3>Guaranteed to work.</h3>
        <p className="features-paragraph">Hi, my name is adarsh kumar gupta. An original one.</p>
      </div>

    </div>

  </section>
      );
    }
  };
  export default MiddleSection;