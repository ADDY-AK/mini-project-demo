import React from 'react';
import '../App.css';


class Header extends React.Component {

    render() {
      return (
        <div id="header">
  <div className="container-fluid p-0">
    <div className="background">
       <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
      <div className="cube"></div>
    </div>


   <header>
   <nav className="navbar navbar-expand-lg navbar-dark">

<a className="navbar-brand" href="">TechPrism</a>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarTogglerDemo02">

  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" href="#footer">Contact</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#pricing">Pricing</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#cta">Download</a>
    </li>
  </ul>
</div>
</nav>

  </header>
</div>
</div>
      );
    }
  };
  export default Header;