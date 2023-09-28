import styles from '../styles/Epk.module.css';
import Head from 'next/head'
import Biography from '../components/Biography';
import TourList from '../components/TourList';
import ContactInfo from '../components/ContactInfo';


const EPK = () => {

    const videos = [
        {
            videoUrl: "/video/Second-Chance_Live@Høstrock2023-comp.mov",
            description: 'Live video of our song "Second Chance" from Høstrock, September 2023.',
        },
        {
            videoUrl: "/video/Need-Your-Love_Live@Høstrock2023-comp.mov",
            description: 'Live video of our newest song "Need Your Love" from Høstrock, September 2023. Not released yet!',
        },
        {
            videoUrl: "/video/Easy_Way_Out_Live@Byscenen-compressed.mp4",
            description: 'Support gig for WigWam at Byscenen in Trondheim, March 2023.',
        },
        {
            videoUrl: "/video/Coming_Home_Live@Byscenen-compressed.mp4",
            description: 'Live video of our song "Coming Home" at Byscenen in Trondheim, March 2023.',
        }
    ];

    return (
        <>
            <Head>
                <title>Main Street Revival</title>
                <meta name="description" content="Official website of Main Street Revival" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.epkContainer}>
                    <h1 className={styles.epkTitle}>Electronic Press Kit</h1>

                    <section className={styles.introductionSection}>
                        <h2>Welcome to Main Street Revival's EPK</h2>
                        <p>
                            MWe're thrilled to have you here! Our Electronice Press Kit provides you with all the essential information about us.
                            You'll find our latest tracks, live performance videos, upcoming tour dates, and more.
                        </p>
                        <p>
                            Feel free to explore, and if you'd like to get in touch for booking or collaboration opportunities, please contact us at <a href="mailto: msrband@outlook.com"></a>
                        </p>
                    </section>

                    <section className={styles.musicSection}>
                        <h2>Our Music</h2>
                        <div className={styles.spotifyWrapper}>
                            <iframe className={styles.spotifyPlayer} src="https://open.spotify.com/embed/artist/5wTiHNGlupWnSvCiZIncpe?utm_source=generator&theme=0" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </section>

                    <section id='videoSection'>
                    <h2>Music Videos</h2>
                    <div className={styles.videoSection}>
                        {videos.map((video, index) => {
                            console.log(video.videoUrl);
                            return (
                                <div key={index} className={styles.videoCard}>
                                    <div className={styles.videoWrapper}>
                                        <video controls className={styles.video}>
                                            <source src={video.videoUrl} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className={styles.videoDescription}>
                                        {video.description}
                                    </div>
                                </div>
                                );
                            })}
                    </div>
                    </section>

                    <Biography />

                    <TourList />

                    <ContactInfo />

                    <div className={styles.downloadSection}>
                        <h3>Download Our Technical Rider</h3>
                        <a href="/files/technical_rider_msr-combined.pdf" download className={styles.downloadButton}>
                            Download PDF
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default EPK;