import fbIcon from "../../graphics/socials/fb.svg";
import instIcon from "../../graphics/socials/inst.svg";
import twIcon from "../../graphics/socials/tw.svg";
import inIcon from "../../graphics/socials/in.svg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["wrapper"]}>
      <div className={styles["info"]}>
        <div className={styles["title"]}>FASHION</div>
        <div className={styles["desc"]}>
          Complete your style with awesome clothes from us.
        </div>
        <div className={styles["social"]}>
          <a href="">
            <img src={fbIcon} alt="facebook.svg" />
          </a>
          <a href="">
            <img src={instIcon} alt="instagram.svg" />
          </a>
          <a href="">
            <img src={twIcon} alt="twitter.svg" />
          </a>
          <a href="">
            <img src={inIcon} alt="linkedIn.svg" />
          </a>
        </div>
      </div>
      <div className={styles["links"]}>
        <a className={styles["link-item-dedicated"]} href="">
          Company
        </a>
        <a className={styles["link-item"]} href="">
          About
        </a>
        <a className={styles["link-item"]} href="">
          Contact us
        </a>
        <a className={styles["link-item"]} href="">
          Support
        </a>
        <a className={styles["link-item"]} href="">
          Careers
        </a>
        <a className={styles["link-item-dedicated"]} href="">
          Quick link
        </a>
        <a className={styles["link-item"]} href="">
          Share location
        </a>
        <a className={styles["link-item"]} href="">
          Orders tracking
        </a>
        <a className={styles["link-item"]} href="">
          Size guide
        </a>
        <a className={styles["link-item"]} href="">
          FAQs
        </a>
        <a className={styles["link-item-dedicated"]} href="">
          Legal
        </a>
        <a className={styles["link-item"]} href="">
          Terms & condition
        </a>
        <a className={styles["link-item"]} href="">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
