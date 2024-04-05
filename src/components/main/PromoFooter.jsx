import promoFooterImg from "../../graphics/promo/promo_footer.png";
import appStoreImg from "../../graphics/icons/app-store.png";
import googleImg from "../../graphics/icons/google-play.png";

import styles from "./PromoFooter.module.css";

const PromoFooter = () => {
  return (
    <section className={styles["wrapper"]}>
      <div className={styles["banner"]}>
        <div className={styles["title"]}>DOWNLOAD APP & GET THE VOUCHER!</div>
        <div className={styles["desc"]}>
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </div>
        <div className={styles["apps"]}>
          <a href="" className={styles["button"]}>
            <img src={appStoreImg} alt="app_store.png" />
          </a>
          <a href="" className={styles["button"]}>
            <img src={googleImg} alt="google.png" />
          </a>
        </div>
      </div>
      <div className={styles["image"]}>
        <img src={promoFooterImg} alt="promo_footer.jpg" />
      </div>
    </section>
  );
};

export default PromoFooter;
