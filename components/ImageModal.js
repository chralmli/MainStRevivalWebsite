import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/components/ImageModal.module.css';
import Image from 'next/image';

Modal.setAppElement('#__next');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal"
            className={styles.imageModal}
            overlayClassName={styles.imageModalOverlay}
        >
            <Image src={image} alt='Expanded View' width={300} height={300} layout='responsive' className={styles.imageModalImage} />
            <button onClick={onRequestClose} className={styles.imageModalButton}>&#x2715;</button>
        </Modal>
    );
}

export default ImageModal;