// rafce
import React from 'react'
import site_logo from '../images/logo.png';
import FontAwesome from 'react-fontawesome';
 
const Navbar = () => {
    return (
   
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        
      <div className="container">

        <a className="navbar-brand" href="#"><img className='site_logo' src={site_logo} alt='logo' /></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesome name="bars" style={{ color: '#fff' }} />
          </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        
        
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            
          <li className="nav-item">
              <a className="nav-link active" href="#"> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#">How Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>

          </ul>
           
        </div>

        </div>
      </nav>

    )
}

export default Navbar
