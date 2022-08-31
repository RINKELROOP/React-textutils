import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {

return (

     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand" >{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/">{props.aboutText}</a>
            <a className="nav-link" href="/">Pricing</a>
            <a href="/" className="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
  }
  Navbar.propTypes = {
    title: propTypes.string.isRequired,
    aboutText: propTypes.string.isRequired
        }

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About Us'
 };