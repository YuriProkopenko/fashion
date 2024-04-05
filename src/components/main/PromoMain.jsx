import promoMainImg from "../../graphics/promo/promo_main.jpg";

import styles from "./PromoMain.module.css";

const PromoMain = () => {
  return (
    <section className={styles["wrapper"]}>
      <div className={styles["image"]}>
        <img src={promoMainImg} alt="promo.jpg" />
      </div>
      <div className={styles["banner"]}>
        <div className={styles["title"]}>
          <div className={styles["title-decor-white"]}>
            <span>PAYDAY</span>
          </div>
          <span>SALE NOW</span>
        </div>
        <p className={styles["desc-medium"]}>
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>
        <p className={styles["desc-bold"]}>1 June - 10 June 2021</p>
        <p className={styles["desc-normal"]}>*Terms & Conditions apply</p>
        <a href="" className={styles["button"]}>
          SHOP NOW
        </a>
      </div>
    </section>
  );
};

export default PromoMain;
