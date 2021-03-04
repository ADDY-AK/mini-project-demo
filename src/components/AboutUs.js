import React from 'react';
import '../App.css';


class AboutUs extends React.Component {

    render() {
      return (
        <section id="about-us">
            <div id="about-us-carousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#about-us-carousel" data-slide-to="0" className="active"></li>
    <li data-target="#about-us-carousel" data-slide-to="1"></li>
    <li data-target="#about-us-carousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <h2 class="about-us-text">Hi, my name is adarsh kumar gupta.</h2>
      <img className="about-us-image" src="../images/barbara_palvin_4k_3.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
    <h2 class="about-us-text">Hi, my name is adarsh kumar gupta.I am a vampire.</h2>
      <img className="about-us-image" src="https://github.com/ADDY-AK/mini-project-demo/blob/master/src/images/barbara_palvin_4k_3.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
    <h2 class="about-us-text">Hi, my name is adarsh kumar gupta. An original one.</h2>
      <img className="about-us-image" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#about-us-carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#about-us-carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    <img src="../images/barbara_palvin_4k_3.jpg"></img>
        </section>
    
      );
    }
  };
  export default AboutUs;