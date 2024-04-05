import HM from "./../../graphics/brands/HM.png";
import Obey from "./../../graphics/brands/Obey.png";
import Shopify from "./../../graphics/brands/Shopify.png";
import Lacoste from "./../../graphics/brands/Lacoste.png";
import Levis from "./../../graphics/brands/Levis.png";
import Amazon from "./../../graphics/brands/Amazon.png";

import styles from "./Brands.module.css";

const Brands = () => {
  return (
    <section className={styles["wrapper"]}>
      <img src={HM} alt="" />
      <img src={Obey} alt="" />
      <img src={Shopify} alt="" />
      <img src={Lacoste} alt="" />
      <img src={Levis} alt="" />
      <img src={Amazon} alt="" />
    </section>
  );
};

export default Brands;
