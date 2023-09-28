import styles from '../styles/components/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerLinks}>
                <Link className={styles.navLink} href="/about">About</Link>
                <Link className={styles.navLink} href="/music">Music</Link>
                <Link className={styles.navLink} href="/events">Events</Link>
                <Link className={styles.navLink} href="/contact">Contact</Link>
            </ul>

            <div className={styles.divider}></div>

            <div className={styles.footerContact}>
                <p>Email: <a href="mailto:msrband@outlook.com">msrband@outlook.com</a></p>
                <p>Phone: +4741086468</p>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.copyright}>
                <p>&copy; 2023 Main Street Revival. All rights reserved.</p>
                <p>Website by Christian Almli</p>
            </div>
        </footer>
    )
}

export default Footer;