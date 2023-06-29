import { FCC } from "shared/types";
import styles from "./Layout.module.scss";
import { Header } from "widgets/Header";

export const Layout: FCC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
