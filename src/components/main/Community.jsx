import styles from "./Community.module.css";

const Community = () => {
  return (
    <section className={styles["wrapper"]}>
      <div className={styles["title"]}>
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </div>
      <div className={styles["desc"]}>
        Type your email down below and be young wild generation
      </div>
      <form className={styles["form"]}>
        <input
          className={styles["form-input"]}
          placeholder="Add your email here"
        />
        <button className={styles["form-button"]}>SEND</button>
      </form>
    </section>
  );
};

export default Community;
