import Image from "next/image";
import LogoImg from "../../../../public/ironwoods-logo.webp";

import { Nav } from "./Nav/Nav";

import styles from "./Logo.module.scss";

export const Logo: React.FC = (): React.ReactNode => {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logoImage}
          src={LogoImg}
          alt="Ironwoods Timberwoods Inc. Logo"
          width={140}
          height={140}
          quality={70}
          priority={true}
          loading="eager"
        />
      </div>
      <Nav />
    </div>
  );
};
