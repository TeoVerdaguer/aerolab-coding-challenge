import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <a href="https://github.com/TeoVerdaguer/aerolab-coding-challenge">
                <div className={styles.img}></div>
                <p className={styles.text}>View this repository</p>
            </a>
        </div>
    );
}
