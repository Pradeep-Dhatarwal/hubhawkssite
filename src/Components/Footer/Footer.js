import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../../images/FooterLogo.svg'
import facebook from '../../images//SVG/facebook.svg'
import linkedin from '../../images/SVG/linkedin.svg'
import instagram from '../../images/SVG/insta.svg'
import twitter from '../../images/SVG/twitter.svg'
function footer() {
  return (
    <div className="page footer">
      <div className="footer-heading">
        <div className="stencil">LET’S COLLABORATE</div>
        <div className="heading">abhijeet@hubhawks.com</div>
        <div className="heading">+917060495034</div>
      </div>
      <div className="footer-logo">
        <img src={footerLogo} alt="" width="350px"/>
      </div>
      <div className="socialmedia">
        <div className="img-wrap">
          <Link to="instagram.com">
            <img src={instagram} alt="" />
          </Link>
          <img src={linkedin} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
        <div className="copy">
          ©2021 Hubhawks
        </div>
      </div>
    </div>
  )
}

export default footer
