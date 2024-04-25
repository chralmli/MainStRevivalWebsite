import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styles from '../styles/components/VideoComponent.module.css'; 

const VideoComponent = () => {

    return (
        <div className={styles.container}>
            <div className={styles.videoWrapper}>
                {/* <video controls width="100%">
                    <source src="/video/EasyWayOut-Video-compressed.mp4" type="video/mp4" />
                </video> */}
                <iframe className={styles.video} src="https://www.youtube.com/embed/krs_kCZz_Is?si=kNtlVMNxp5qNYm-k" title="Main Street Revival - Need Your Love (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

    )
}

export default VideoComponent;