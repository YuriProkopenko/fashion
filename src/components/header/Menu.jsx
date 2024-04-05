import styles from "./Menu.module.css";

const Menu = ({ links }) => {
  return (
    <ul className={styles["wrapper"]}>
      {links && links.map((l) => <li key={l}>{l}</li>)}
    </ul>
  );
};

export default Menu;
