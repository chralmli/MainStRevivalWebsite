import React from "react";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import styles from '../styles/components/HeroSection.module.css';

library.add(faFacebook, faInstagram, faYoutube);

const HeroSection = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.hero}>

            {/* Social Media Links */}


                
            {/* Hero Content */}
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}><Image className={styles.logo} src={'/images/msr-liten.png'} alt={'Main Street Revival logo'} width="300" height="300" /></h1>
                <h2 className={styles.heroSubtitle}>Debut Album Out!</h2>
                <a href="https://open.spotify.com/album/0xIYesyZvOEYHkMyFM3ljQ?si=0eiMj4LlR561kUqopADGTA" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Listen</a>
            </div>

            <a onClick={scrollToContent} className={styles.scrollDown}>
                ↓
            </a>

            <div className={styles.parallaxOverlay}></div>
        </div>
    );
};

export default HeroSection;