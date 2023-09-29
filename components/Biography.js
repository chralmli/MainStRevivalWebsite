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
                        Founded in 2018 in Trøndelag, Main Street Revival is a rock trio with a fresh take on a timeless genre.
                        Our lineup consists of Mats Erik Haugskott on guitar and vocals, Julie Sæther Laupstad on bass, and Christian Almli on drums.
                    </p>
                    <p className={styles.text}>From renowned Norwegian events like Blues In Hell and Notodden Bluesfestival to opening for Wig Wam, our live performances have consistently drawn praise for their raw, tight energy
                        Our musical style, showcased in our debut album "Fortune and Fame", blends elements of classic rock with a distinctly modern edge.
                    </p>
                    <p className={styles.text}>While the influence of iconic bands like Led Zeppelin and Black Sabbath is undeniable, we draw most of our inspiration from contemporary rockers like Rival Sons.
                        Our music is a mix of hard-hitting riffs, compelling vocals, and rhythmic complexity that delivers to fans of both old-school and modern rock.
                    </p>
                </div>
            </div>
            {isModalOpen && <ImageModal isOpen={isModalOpen} image={selectedImage} onRequestClose={closeModal}/>}
        </section>
    );
};

export default Biography;