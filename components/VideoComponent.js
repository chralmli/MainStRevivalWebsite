import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styles from '../styles/components/VideoComponent.module.css'; 

const VideoComponent = () => {

    return (
        <div className={styles.container}>
            <div className={styles.videoWrapper}>
                <video controls width="100%">
                    <source src="/video/EasyWayOut-Video-compressed.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

    )
}

export default VideoComponent;