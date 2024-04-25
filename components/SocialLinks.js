import React from "react";
import styles from "../styles/components/SocialLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {

    return (
        <div className={styles.socialLinks}>
        <a href="https://www.facebook.com/MainStreetRevivalBand" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </a>
        <a href="https://www.instagram.com/mainstreetrevivalofficial/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
        </a>
        <a href="https://www.youtube.com/@mainstreetrevivalofficial" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x"/>
        </a>
        </div>
    )
}

export default SocialLinks;