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
            Players must physically crouch to navigate through levels, and peek
            around corners when fighting the enemy.
          </p>
        </div>
        <div className={styles.objective__container}>
          <h2 className={styles.objective__item}>LIDAR SCANNER</h2>
          <hr className={styles.objective__line} />
          <p className={styles.objective__description}>
            The player robot perceives its environment by emitting LIDAR rays in
            the direction it is facing. The color of the LIDAR rays change based
            on the texture of the objects they land on.
          </p>
        </div>
        <div className={styles.objective__container}>
          <h2 className={styles.objective__item}>WEAPONS</h2>
          <hr className={styles.objective__line} />
          <p className={styles.objective__description}>
            The player has access to various weapons such as rifles, shotguns,
            pistols, and knives to eliminate enemies.
          </p>
        </div>
        <div className={styles.objective__container}>
          <h2 className={styles.objective__item}>MUSIC</h2>
          <hr className={styles.objective__line} />
          <p className={styles.objective__description}>
            The beat and intensity of the music being played control various
            elements such as the size of the LIDAR particles and the background
            color of the scene.
          </p>
        </div>
      </div>
    </section>
  );
}
