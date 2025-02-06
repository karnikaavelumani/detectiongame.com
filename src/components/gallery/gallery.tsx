import styles from "./gallery.module.css";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__container}>
        <h1 className={styles.gallery__title}>GALLERY</h1>
        <div className={styles.gallery__images}>
          <Image
            src={"/image1.webp"}
            alt="Background image of gameplay"
            className={styles.gallery__image}
            fill
          />
          <Image
            src={"/image2.webp"}
            alt="Background image of gameplay"
            className={styles.gallery__image}
            fill
          />
          <Image
            src={"/image3.webp"}
            alt="Background image of gameplay"
            className={styles.gallery__image}
            fill
          />
          <Image
            src={"/image4.webp"}
            alt="Background image of gameplay"
            className={styles.gallery__image}
            fill
          />
          <Image
            src={"/image5.webp"}
            alt="Background image of gameplay"
            className={styles.gallery__image}
            fill
          />
          <Image
            src={"/image6.webp"}
            alt="Background image of gameplay"
            className={styles.gallery__image}
            fill
          />
        </div>
      </div>
    </section>
  );
}
