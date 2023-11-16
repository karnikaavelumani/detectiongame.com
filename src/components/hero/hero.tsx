import styles from "./hero.module.css";
import Image from "next/image";
import Background from "public/placeholder.webp";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>Detection</h1>
      </div>
      <Image
        src={Background}
        alt="Background video of gameplay"
        className={styles.hero__image}
        fill
      />
    </section>
  );
}
