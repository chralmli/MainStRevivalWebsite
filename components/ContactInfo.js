import styles from '../styles/components/ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <section className={styles.contactInfo}>
            <h2 className={styles.title}>Contact Information</h2>
                <div className={styles.singleContact}>
                    <strong>Contact Us:</strong>
                    <p>Main Street Revival</p>
                    <p>msrband@outlook.com</p>
                </div>
        </section>
    );
};

export default ContactInfo;