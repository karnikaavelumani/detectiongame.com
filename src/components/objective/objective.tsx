import styles from "./objective.module.css";

export default function Objective() {
  return (
    <section className={styles.objective}>
      <div className={styles.objective__content}>
        <h1 className={styles.objective__title}>OBJECTIVE</h1>
        <div className={styles.objective__container}>
            <h2 className={styles.objective__item}>VR-FPS</h2>
            <hr className={styles.objective__line} />
            <p className={styles.objective__description}>
            Players must physically crouch to navigate through levels, and peek around corners when fighting the enemy.
            </p>
        </div>
      </div>
    </section>
  );
}
