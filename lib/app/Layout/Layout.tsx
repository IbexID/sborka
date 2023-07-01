import { FCC } from "shared/types";
import styles from "./Layout.module.scss";
import { Header } from "widgets/Header";
import { MyBasket } from "features/MyBasket";

export const Layout: FCC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__main}>
        {children}
        <MyBasket />
      </main>
    </div>
  );
};
