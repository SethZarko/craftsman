import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import styles from "./Nav.module.scss";

export const Nav: React.FC = (): React.ReactNode => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleNav = (): void => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="#">HOME</Link>
        </li>
        <li>
          <Link href="#">SERVICES</Link>
        </li>
        <li>
          <Link href="#">ABOUT</Link>
        </li>
        <li>
          <Link href="#">CONTACT</Link>
        </li>
      </ul>
      {/* MOBILE NAV */}
      <div className={styles.mobileNav}>
        <span
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={handleNav}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </span>

        {navOpen && (
          <motion.div
            className={styles.mobileMenu}
            role="menu"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li>
                <Link href="#" role="link">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#" role="link">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="#" role="link">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="#" role="link">
                  CONTACT
                </Link>
              </li>
            </ul>

            <div className={styles.mobileDetails}>
              <div className={styles.mobileContact}>
                <span>(519)-777-9044</span>
                <span>ironwoodstimberworksinc@gmail.com</span>
              </div>
              <div className={styles.mobileSocials}>
                <FaFacebookF />
                <FaInstagram />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
