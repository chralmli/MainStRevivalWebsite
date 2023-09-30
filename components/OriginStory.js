import React, { useState } from 'react';
import styles from '../styles/components/OriginStory.module.css';
import ImageModal from './ImageModal';
import Image from 'next/image';

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
            images: ["/images/coming_home.jpg", "/images/lost_your_way.jpg"],
            description: 'Our first two singles, «Coming Home» and «Lost Your Way» released in 2020',
        },
        {
            images: ["/images/119A7138-1.jpeg"],
            description: 'When Julie joined our band in late 2021, everything fell into place, and gave a boost to our song-writing. Autumn 2022 we released our third single, «First Time», which quickly became a popular track with over 30000 streams during the first month.',
        },
        {
            images: ["/images/msr-gold-logo-800x800.png", "/images/easy_way_out_single.jpg"],
            description: 'At the end of 2022, our first album was close to wrapping up, and at the beginning of 2023 we released our fourth single, «Easy Way Out» as a teaser for our debut album «Fortune and Fame»',
        },
        {
            images: ["/images/ByscenenWigWam-comp.jpg", "/images/nowigwamlogo-banner.jpg"],
            description: 'Support gig for WigWam at Byscenen in Trondheim, March 2023',
        },
        {
            images: ["/images/touchdown_logo.jpg"],
            description: 'Our album was mastered by Ronny Wikmark at Touchdown Music. This led to a great collaboration, and we are now signed to Touchdown Music as our record label.',
        },
        {
            images: ["/images/fortuneandfame_front-cover.png"],
            description: 'We released our debut album «Fortune and Fame» in March 2023, and it was well received by both fans and critics. The album was recorded at Lydfolket Studio in Inderøy. ',
        },
        {
            images: ["/images/awesome_guitarist.jpg"],
        },
        {
            images: ["/images/fortuneandfame_front-cover.png"],
            description: 'We are currently working on new material, so stay tuned for more MSR in the future!',
        },  
        {
            images: ["/images/rostad-scene-comp.png"],
        },
    ];

    return (
        <section className={styles.originStory}>
            <h2 className={styles.originTitle}>The Origin of Main Street Revival</h2>
            <p className={styles.originIntro}>Founded in 2018 in Trøndelag, Main Street Revival is a rock trio with a fresh take on a timeless genre.</p>
            <div className={styles.aboutHero}>
                <Image className={styles.pressPhoto} src="/images/119A7344-1-compressed.jpeg" alt="Main Street Revival press photo" width={2400} height={1600} layout='responsive'/>
            </div>
            
            <div className={styles.originContent}>
                <p>Our lineup consists of Mats Erik Haugskott on guitar and vocals, Julie Sæther Laupstad on bass, and Christian Almli on drums.</p>
                <p>From renowned Norwegian events like Blues In Hell and Notodden Bluesfestival to opening for Wig Wam, our live performances have consistently drawn praise for their raw, tight energy</p>
                <p>Our musical style, showcased in our debut album «Fortune and Fame», blends elements of classic rock with a distinctly modern edge. While the influence of iconic bands like Led Zeppelin and Black Sabbath is undeniable, we draw most of our inspiration from contemporary rockers like Rival Sons.</p>
                <p>Our music is a mix of hard-hitting riffs, compelling vocals, and rhythmic complexity that delivers to fans of both old-school and modern rock.</p>
            </div>

            <div className={styles.originTimeline}>
                {imageCards.map((card, imgIndex) => (
                    <div key={imgIndex} className={styles.timelineCard}>
                        <div className={styles.cardContent}>
                            {card.images.map((image, index) => (
                                <Image key={imgIndex} src={image} width={2000} height={2000} layout='responsive' alt={`Image ${imgIndex}`} className={styles.timelineImage} onClick={() => openModal(image)}/>
                            ))}
                        </div>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            {isModalOpen && <ImageModal isOpen={isModalOpen} image={selectedImage} onRequestClose={closeModal}/>}
        </section>
    )
}

export default OriginStory;