import styles from '../styles/components/ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <section className={styles.contactInfo}>
            <h2 className={styles.title}>Contact Information</h2>
                <div className={styles.singleContact}>
                    <strong>Contact Us:</strong>
                    <p>Main Street Revival</p>
                    <a className={styles.mailTo} href="mailto: msrband@outlook.com">msrband@outlook.com</a>
                </div>
        </section>
    );
};

export default ContactInfo;