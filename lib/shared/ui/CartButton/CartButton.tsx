import { FC } from "react";
import styles from "./CartButton.module.scss";
import { SvgCart } from "../svg";

interface ICartButton {
  count: number;
}

export const CartButton: FC<ICartButton> = ({ count }) => {
  return (
    <button className={styles.cartButton}>
      <SvgCart />
      <span>{count}</span>
    </button>
  );
};
