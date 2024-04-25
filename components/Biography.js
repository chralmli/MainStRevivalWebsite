import React, { useState } from 'react';
import styles from '../styles/components/Biography.module.css';
import ImageModal from './ImageModal';
import Image from 'next/image';

const Biography = () => {

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

    const images = [
        "/images/119A7195-1-min.jpeg"
    ]

    return (
        <section className={styles.biography}>
            <div className={styles.container}>
                <h2 className={styles.title}>Biography</h2>
                <div className={styles.content}>
                    {images.map((image, index) => (
                        <Image key={index} src={image} width={6352} height={4234} layout='responsive' alt={`Image ${index}`} className={styles.image} onClick={() => openModal(image)}/>
                    ))}
                    <p className={styles.text}>
                    Main Street Revival - the power trio that has revitalized the classic rock spirit of the 70s. 
                    With their unique style, inspired by iconic rock bands like Led Zeppelin and Black Sabbath, 
                    as well as newer bands like Rival Sons and Kaleo, they affirm that rock music is still thriving.
                    </p>
                    <p className={styles.text}>
                        Since their launch in 2018, Main Street Revival has released one album, &quot;Fortune and Fame,&quot; and two singles, &quot;First Time&quot; and &quot;Easy Way Out.&quot;
                        Their debut album was released under Touchdown Music AS in May 2023 and has received glowing reviews both nationally and internationally. 
                        Tracks like &quot;Only Mine&quot; and &quot;Communication&quot; showcase the band&apos;s ability to play and produce varied and captivating music.
                    </p>
                    <p className={styles.text}>
                    In March 2024, they released their latest single, &quot;Need Your Love&quot;,
                     which has received great feedback and is being played on radio stations in both the UK and the US, further broadening their international reach.
                    </p>
                    <p className={styles.text}>
                    The band has made a notable impact on the Norwegian live scene. 
                    They have performed at some of Norway&apos;s biggest blues festivals, including the Notodden Blues Festival and Blues In Hell, and have won the hearts of many fans. 
                    This led to them being chosen as the opening act for WigWam at Byscenen in Trondheim in 2023. 
                    The band has also achieved remarkable results in several competitions, 
                    with two podium finishes in the Norwegian Championship in blues and a second place in TM Live 2022.
                    </p>
                    <p className={styles.text}>
                    Main Street Revival consists of three members:
                    <ul>
                        <li>Mats Haugskott: Vocalist and guitarist</li>
                        <li>Julie Sæther Laupstad: Bassist</li>
                        <li>Christian Almli: Drummer</li>
                    </ul>
                    </p>
                    <p className={styles.text}>
                    As a live band, Main Street Revival truly shows what they stand for. 
                    With tough rock, powerful vocals, and an impressive stage show, they deliver an exceptional experience. 
                    For those who miss the golden age of music with Led Zeppelin and Humble Pie, Main Street Revival is just what you need.
                    </p>
                </div>
            </div>
            {isModalOpen && <ImageModal isOpen={isModalOpen} image={selectedImage} onRequestClose={closeModal}/>}
        </section>
    );
};

export default Biography;











