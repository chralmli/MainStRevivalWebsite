import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MusicPlayer from '../components/MusicPlayer'
import HeroSection from '../components/HeroSection'
import UpcomingGigs from '../components/UpcomingGigs'
import VideoComponent from '../components/VideoComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Street Revival</title>
        <meta name="description" content="Official website of Main Street Revival" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <HeroSection />

      <div className={styles.container}>

        <div className={styles.content}>
          <section id="featured-music">
            <MusicPlayer/>
          </section>
          <section id="videoSection">
            <VideoComponent />
          </section>
          <section id="gigsSection">
            <UpcomingGigs />
          </section>
        </div> 
      </div>
    </>
  )
}
