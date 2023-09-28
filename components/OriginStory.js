import React, { useState } from 'react';
import styles from '../styles/components/OriginStory.module.css';
import ImageModal from './ImageModal';

const OriginStory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    }

    const imageCards = [
        {
            images: ["/images/coming_home.jpg"],
            description: 'Our first two singles, "Coming Home" and "Lost Your Way" released in 2020',
        },
        {
            images: ["/images/Notodden-ferie-comp.jpg"],
            description: 'Relaxing before attending the Union Blues Cup in Notodden in 2022',
        },
        {
            images: ["/images/ByscenenWigWam-comp.jpg"],
            description: 'Support gig for WigWam at Byscenen in Trondheim, March 2023',
        },
    ];

    return (
        <section className={styles.originStory}>
            <h2 className={styles.originTitle}>The Origin of Main Street Revival</h2>
            <p className={styles.originIntro}>Founded in 2018 in Trøndelag, Main Street Revival is a rock trio with a fresh take on a timeless genre.</p>
            
            <div className={styles.originContent}>
                <p>Our lineup consists of Mats Erik Haugskott on guitar and vocals, Julie Sæther Laupstad on bass, and Christian Almli on drums.</p>
                <p>From renowned Norwegian events like Blues In Hell and Notodden Bluesfestival to opening for Wig Wam, our live performances have consistently drawn praise for their raw, tight energy</p>
                <p>Our musical style, showcased in our debut album "Fortune and Fame", blends elements of classic rock with a distinctly modern edge. While the influence of iconic bands like Led Zeppelin and Black Sabbath is undeniable, we draw most of our inspiration from contemporary rockers like Rival Sons.</p>
                <p>Our music is a mix of hard-hitting riffs, compelling vocals, and rhythmic complexity that delivers to fans of both old-school and modern rock.</p>
            </div>

            <div className={styles.originTimeline}>
                {imageCards.map((card, imgIndex) => (
                    <div key={imgIndex} className={styles.timelineCard}>
                        <div className={styles.cardContent}>
                            {card.images.map((image, index) => (
                                <img key={imgIndex} src={image} alt={`Image ${imgIndex}`} className={styles.timelineImage} onClick={() => openModal(image)}/>
                            ))}
                        </div>
                        <p>{card.description}</p>
                    </div>
                ))}
                {/* <div className={styles.timelineCard}>
                    <div className={styles.cardContent}>
                        <img src="/images/coming_home.jpg" alt="Photo for Main Street Revival's single 'Coming Home'" className={styles.timelineImage} onClick={() => openModal('/images/coming_home.jpg')}/>
                        <img src="/images/lost_your_way.jpg" alt="Photo for Main Street Revival's single 'Lost Your Way'" className={styles.timelineImage}/>
                    </div>
                    <p>Our first two singles, "Coming Home" and "Lost Your Way" released in 2020</p>
                </div>
                <div className={styles.timelineCard}>
                    <div className={styles.cardContent}>
                        <img src="/images/Notodden-ferie-comp.jpg" alt="Main Street Revival at their rented house in Notodden" className={styles.timelineImage}/>
                    </div>
                    <p>Relaxing before attending the Union Blues Cup in Notodden in 2022</p>
                </div>
                <div className={styles.timelineCard}>
                    <div className={styles.cardContent}>
                        <img src="/images/ByscenenWigWam-comp.jpg" alt="Main Street Revival at their rented house in Notodden" className={styles.timelineImage}/>
                    </div>
                    <p>Support gig for WigWam at Byscenen in Trondheim, March 2023</p>
                </div> */}
            </div>
            {isModalOpen && <ImageModal isOpen={isModalOpen} image={selectedImage} onRequestClose={closeModal}/>}
        </section>
    )
}

export default OriginStory;