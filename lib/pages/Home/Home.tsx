import { FC } from "react";
import styles from "./Home.module.scss";
import { ShoesItems } from "widgets/ShoesItems";

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <ShoesItems />
    </div>
  );
};
