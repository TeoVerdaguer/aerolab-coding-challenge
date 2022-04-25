import styles from "../styles/Walkthrough.module.css";

export default function Walkthrough() {
    return (
        <section className={styles.container}>
            <div className={styles.cardsBG}></div>
            <div className={styles.cardsContainer}>
                <div className={styles.introCard} id={styles.card1}>
                    <div className={styles.illustrationsBG}></div>
                    <img
                        className={styles.cardsIllustration}
                        src="/illustrations/walkthroug-1-desktop.png"
                        alt="character sitting on a rocket"
                    />

                    <div className={styles.bottomCard}>
                        <div className={styles.titleAndIcon}>
                            <div className={styles.iconWrapper}>
                                <img
                                    className={styles.cardIcon}
                                    src="/icons/walkthrough-1.svg"
                                    alt=""
                                />
                            </div>
                            <h2 className={styles.cardTitle}>1—browse</h2>
                        </div>
                        <p className={styles.cardParagraph}>
                            Browse our tech catalog with more than 20 top tech
                            products
                        </p>
                    </div>
                </div>

                <div className={styles.introCard} id={styles.card2}>
                    <div className={styles.illustrationsBG}></div>
                    <img
                        className={styles.cardsIllustration}
                        src="/illustrations/walkthroug-2-desktop.png"
                        alt="two hands coming out of  two phone's screens and touching each other"
                    />

                    <div className={styles.bottomCard}>
                        <div className={styles.titleAndIcon}>
                            <div className={styles.iconWrapper}>
                                <img
                                    className={styles.cardIcon}
                                    src="/icons/walkthrough-2.svg"
                                    alt=""
                                />
                            </div>
                            <h2 className={styles.cardTitle}>2—choose</h2>
                        </div>
                        <p className={styles.cardParagraph}>
                            Exchange your hard earned AeroPoints for the item
                            you want
                        </p>
                    </div>
                </div>

                <div className={styles.introCard} id={styles.card3}>
                    <div className={styles.illustrationsBG}></div>
                    <img
                        className={styles.cardsIllustration}
                        src="/illustrations/walkthroug-3-desktop.png"
                        alt="character sitting on a desk with a computer"
                    />

                    <div className={styles.bottomCard}>
                        <div className={styles.titleAndIcon}>
                            <div className={styles.iconWrapper}>
                                <img
                                    className={styles.cardIcon}
                                    src="/icons/walkthrough-3.svg"
                                    alt=""
                                />
                            </div>
                            <h2 className={styles.cardTitle}>3—enjoy!</h2>
                        </div>
                        <p className={styles.cardParagraph}>
                            All done, you can relax! We’ll take care of delivery
                            of your tech item!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
