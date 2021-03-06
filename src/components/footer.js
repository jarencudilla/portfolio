import React from 'react'; 
import '../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faYoutube,faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer()
{
return <div className='icons-list'>
<a className="faLinkedin app-link social-media-list" href="https://www.linkedin.com/in/jarencharlescudilla/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
<a className="faGithub app-link social-media-list" href="https://github.com/jarencudilla/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
<a className="fatwitter app-link social-media-list" href="https://twitter.com/jaren" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
<a className="faFacebook app-link social-media-list" href="https://www.facebook.com/jaren.cudilla/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
<a className="faYoutube app-link social-media-list" href="https://www.youtube.com/c/gamerdadjaren" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
</div>
  
}

export default Footer;