import React from 'react'
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"

const HomeSocials = () => {
    return (
        <div className="home__socials">
            <a href="mailto:denise.tsui271@gmail.com" className="social__link" target="_blank">
            <FontAwesomeIcon icon={ faEnvelope } />
            </a>
            <a href="https://www.linkedin.com/in/denise-tsui" className="social__link" target="_blank">
                <FontAwesomeIcon 
                    icon={ faLinkedinIn } 
                    className="hover:text-blue-500" />
            </a>
            <a href="https://github.com/denise-tsui" className="social__link" target="_blank">
            <FontAwesomeIcon 
                icon={ faGithubAlt } 
                className="hover:text-blue-500" />
            </a>

        </div>
    )
}

export default HomeSocials