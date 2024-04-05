import promoHeaderImg from "../../graphics/promo/promo_header.jpg";

import styles from "./PromoHeader.module.css";

const PromoHeader = () => {
  return (
    <section className={styles["wrapper"]}>
      <div className={styles["banner"]}>
        <div className={styles["title"]}>
          <div className={styles["title-decor-white"]}>
            <span>LET’S</span>
          </div>
          <span>EXPLORE</span>
          <div className={styles["title-decor-yellow"]}>
            <span>UNIQUE</span>
          </div>
          <span>CLOTHES.</span>
        </div>
        <p className={styles["desc"]}>
          Live for Influential and Innovative fashion!
        </p>
        <a className={styles["button"]} href="">
          Shop Now
        </a>
      </div>
      <div className={styles["image"]}>
        <img src={promoHeaderImg} alt="promo_01.jpg" />
      </div>
    </section>
  );
};

export default PromoHeader;
