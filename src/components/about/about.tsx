import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <h1 className={styles.about__title}>Trust no one,</h1>
        <h1 className={styles.about__title}>including yourself</h1>
        <p className={styles.about__description}>
          Set in a future reality in 2078, you assume the role of a killer robot
          set on targeted rampages by a mysterious group.
        </p>
      </div>
    </section>
  );
}
