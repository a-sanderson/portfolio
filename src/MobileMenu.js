import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faTimes} from "@fortawesome/free-solid-svg-icons"

const MobileMenu = props => {
    
    return(
        <div className="mobileMenu" style={props.style}>
            <div style={{alignSelf: "flex-end", top:5, position: "fixed"}} onClick={props.onClick}><FontAwesomeIcon   icon={faTimes} color="white" size= "2x" /></div>
            <h2>Aaron Sanderson</h2>
            <div className="mobilePic"></div>
            <h2>ronsanderson09@gmail.com</h2>
            <div className="mediaContainer">
                <a href= "https://github.com/a-sanderson"><FontAwesomeIcon icon={faGithub} color="white" size= "3x" /></a>
                <a href="https://www.linkedin.com/in/aaron-sanderson/"><FontAwesomeIcon icon={faLinkedin} color="white" size= "3x" /></a>
                <a href="https://www.facebook.com/aaron.sanderson.98"><FontAwesomeIcon icon={faFacebook} color="white" size= "3x" /></a>
            </div>
        </div>
    )
}

export default MobileMenu