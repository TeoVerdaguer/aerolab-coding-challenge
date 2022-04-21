import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <a href="https://aerolab.us/" target="_blank" rel="noopener noreferrer"><img className={styles.aeroLabLogo} src="/icons/aerolab-logo-1.svg" alt="aerolab logo"/></a>
        <button className={styles.aeroPayDropDownBtn}>
          <img className={styles.aeroLabIcon} src="/icons/aeropay-1.svg" width="32px" height="32px"></img>
          <p className={styles.coinAmount}>10.000</p>
          <img className={styles.dropDownArrow} src="/icons/chevron-default.svg" alt="arrow pointing down"></img>
        </button>
      </nav>
    </div>
  )
}
