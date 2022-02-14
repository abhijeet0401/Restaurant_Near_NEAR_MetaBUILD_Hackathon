import React from 'react' 
// import package social medias
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

// CSS
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-light">
    

                <h3>Follow Us</h3>

              <div className="col item social">
              <p className="social-container">
        <a
          href="https://www.youtube.com/"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
                  
                  </div>
      
            <p className="copyright">NEARSHOP 2021</p>
         
     
      </div>
       


    )
    
}

export default Footer
