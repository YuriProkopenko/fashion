import arrow from "../../graphics/icons/arrow.svg";

import styles from "./CollectionCard.module.css";

const CollectionCard = ({ image, alt, text, slogan }) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["image"]}>
        <img src={image} alt={alt} />
      </div>
      <div className={styles["text"]}>{text}</div>
      <div className={styles["slogan"]}>{slogan}</div>
      <a href="" className={styles["arrow"]}>
        <img src={arrow} alt="arrow.svg" />
      </a>
    </div>
  );
};

export default CollectionCard;
