import styles from "../styles/Products.module.css"
import Product from "./product"

export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.titleAndControls}>
      <h2 className={styles.desktopHeadingsL2Default}>tech products</h2>
        <div className={styles.filterAndSort}>
          <div className={styles.frame228}>

            <div className={styles.filter}>
              <p className={styles.filterText}>Filter by:</p>
              <div className={styles.filterBtn}>
                <p>All Products</p>
                <img className={styles.arrowIcon} src="/icons/arrow-icon.svg" alt="arrow pointing down" />
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.sorter}>
              <p className={styles.sorterText}>Sort by:</p>
              <div className={styles.sortRow}>
                <div className={styles.sortBtn}><p>Most Recent</p></div>
                <div className={styles.sortBtn}><p>Lowest Price</p></div>
                <div className={styles.sortBtn}><p>Highest Price</p></div>
              </div>
            </div>

          </div>
          <div className={styles.pager}>
            <div className={styles.pagerArrowPrevBtn}>
              <img className={styles.pagerArrowPrev} src="/icons/chevron-default.svg" alt="arrow pointing left" />
            </div>
            <p className={styles.pagerText}>Page 1 of 2</p>
            <div className={styles.pagerArrowNextBtn}>
              <img className={styles.pagerArrowNext} src="/icons/chevron-default.svg" alt="arrow pointing right" />
            </div>
          </div>
        </div>
      </div>
      
      <Product/>
      <div className={styles.numberProductsAndPager}>
        <div className={styles.emptyDiv}></div>
        <p className={styles.numberOfProducts}>16 of 32 products</p>
        {/* Pager */}
        <div className={styles.pager}>
            <div className={styles.pagerArrowPrevBtn}>
              <img className={styles.pagerArrowPrev} src="/icons/chevron-default.svg" alt="arrow pointing left" />
            </div>
            <p className={styles.pagerText}>Page 1 of 2</p>
            <div className={styles.pagerArrowNextBtn}>
              <img className={styles.pagerArrowNext} src="/icons/chevron-default.svg" alt="arrow pointing right" />
            </div>
          </div>
      </div>
    </div>
  )
}