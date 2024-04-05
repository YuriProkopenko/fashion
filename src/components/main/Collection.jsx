import CollectionCard from "./CollectionCard";

import styles from "./Collection.module.css";

const Collection = ({ title, cards }) => {
  return (
    <section className={styles["wrapper"]}>
      <div className={styles["title"]}>
        <span>{title}</span>
      </div>
      <article className={styles["cards"]}>
        {cards &&
          cards.map((c) => (
            <CollectionCard
              key={c.text}
              image={c.image}
              text={c.text}
              slogan={c.slogan}
            />
          ))}
      </article>
    </section>
  );
};

export default Collection;
