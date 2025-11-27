import Link from "next/link";

import styles from './Contact.module.scss'

export const Contact: React.FC = (): React.ReactNode => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <span>(519)-777-9044</span>
        <span>ironwoodstimberworksinc@gmail.com</span>
      </div>
      <button className={styles.contactBtn}>
        <Link className={styles.contactLink} href="#">
          CONTACT
        </Link>
      </button>
    </div>
  );
};
