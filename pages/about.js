import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MeetTheBand from '../components/MeetTheBand'
import OriginStory from '../components/OriginStory'
import Image from 'next/image';

export default function About () {
    return (
        <div className={styles.container}>
            <Head>
                <title>About | Main Street Revival</title>
                <meta name="description" content="Official website of Main Street Revival" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>About</h1>
                <div className={styles.content}>

                    <OriginStory />

                    <MeetTheBand />


                </div>
            </main>
        </div>
    )
}