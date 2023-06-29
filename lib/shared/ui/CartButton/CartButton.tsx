import { FC } from "react";
import styles from "./CartButton.module.scss";
import { SvgCart } from "../svg";

interface ICartButton {
  count: number;
  onClick: () => void;
}

export const CartButton: FC<ICartButton> = ({ count, onClick }) => {
  return (
    <button onClick={onClick} className={styles.cartButton}>
      <SvgCart />
      <span className={styles.cartButton__count}>{count || 0}</span>
    </button>
  );
};
