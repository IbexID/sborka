import { FC } from "react";
import styles from "./Home.module.scss";
import { ShoesItems } from "widgets/ShoesItems";
import { MyBasket } from "features/MyBasket";

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <ShoesItems />
      <MyBasket />
    </div>
  );
};
