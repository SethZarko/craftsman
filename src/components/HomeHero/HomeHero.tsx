import Image from "next/image";

import Hero from "../../../public/hero.jpg";

import styles from "./HomerHero.module.scss";
import Link from "next/link";

export const HomeHero: React.FC = (): React.ReactNode => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <Image
        className={styles.heroImg}
        src={Hero}
        alt="Hero Image of Master Craftsmen Work"
        width={1400}
        height={800}
        quality={80}
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className={styles.contentWrapper}>
        <div className={styles.heroContent}>
          <p>Trusted Craftsman. Authentic Services.</p>
          <h1>EXCELLENCE IN TIMBERFRAMING</h1>
        </div>

        <div className={styles.btnContainer}>
          <Link href="#">ABOUT US</Link>
          <Link href="#">SERVICES</Link>
        </div>
      </div>

      <a href="#" className={styles.chevronContainer} aria-label="Scroll to ">
        <span className={styles.chevron} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </a>
    </div>
  );
};
