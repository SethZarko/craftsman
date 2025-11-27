import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import styles from "./Socials.module.scss";

export const Socials: React.FC = (): React.ReactNode => {
  return (
    <div className={styles.socialsWrapper}>
      <FaFacebookF />
      <FaInstagram />
    </div>
  );
};
