import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import MusicPlayer from '../components/MusicPlayer'


export default function Music () {
   return (
    <div className={styles.container}>
        <Head>
            <title>Music | Main Street Revival</title>
            <meta name="description" content="Official website of Main Street Revival" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

            <h1>Music</h1>
            <div className={styles.content}>
                <section id="featured-music">
                    <MusicPlayer/>
                </section>
            </div>
        </main>
    </div>
   ) 
}