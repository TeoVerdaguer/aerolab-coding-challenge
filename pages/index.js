import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from './nav'
import Walkthrough from './walkthrough'
import Products from './products'
import Footer from './footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav/>
      <Head>
        <title>Aerolab coding challenge</title>
        <meta name="description" content="Coding challenge for a frontend developer position at Aerolab" />
        <link rel="icon" href="/favicon.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;900&display=swap" rel="stylesheet"></link>
      </Head>

      <div className={styles.wavesContainer}></div>
      <div className={styles.illustrationBg}><img className={styles.heroIllustration} src="/illustrations/hero-desktop.png" alt="character with VR headset" /></div>
      
      <div className={styles.landingCopyContainer}>
        <p className={styles.text}>explore the</p>
        <h1 className={styles.L1Default}>tech zone</h1>
        <p className={styles.textL1Default}>Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.</p>
        <button className={styles.mainCTA}>
          <p className={styles.viewProductsCTAText}>view all products</p>
          <img className={styles.arrowIcon} src="/icons/arrow-icon.svg" alt="arrow down icon" />
        </button>
      </div>
      <Walkthrough />
      <Products />
      <Footer />
    </div>
  )
}
