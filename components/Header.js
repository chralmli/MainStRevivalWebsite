import styles from '../styles/components/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [ scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu
    const closeMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.openMenu : ""} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.menuToggle} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <Link href="/">
                    <Image className={styles.logo} src={'/images/msr-liten.png'} alt={'Main Street Revival logo'} width={100} height={100} />
            </Link>
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
                <Link onClick={closeMenu} className={styles.navLink} href="/">Home</Link>
                <Link onClick={closeMenu} className={styles.navLink} href="/about">About</Link>
                <Link onClick={closeMenu} className={styles.navLink} href="/music">Music</Link>
                <Link onClick={closeMenu} className={styles.navLink} href="/epk">EPK</Link>
                <Link onClick={closeMenu} className={styles.navLink} href="/merch">Merch</Link>
            </ul>
        </nav>
    );
};

export default Header;
