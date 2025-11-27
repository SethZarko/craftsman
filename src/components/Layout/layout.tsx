import { Header } from "../Header/Header";

import styles from "./layout.module.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
}): React.ReactNode => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        
      </footer>
    </>
  );
};
