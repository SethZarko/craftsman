import { Socials } from "./Socials/Socials";
import { Logo } from "./Logo/Logo";
import { Contact } from "./Contact/Contact";

import styles from "./Header.module.scss";

export const Header: React.FC = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Socials />
        <Logo />
        <Contact />
      </div>
    </header>
  );
};
