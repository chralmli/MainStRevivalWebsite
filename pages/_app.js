import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'
import styles from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const noContainer = pageProps.noContainer;

  return (
  <>
    <Header />
        <SocialLinks />
        <Component {...pageProps} />
    <Footer />
  </>
  )
}

export default MyApp
