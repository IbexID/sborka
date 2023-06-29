import { FC } from "react";
import styles from "./AddToCartButton.module.scss";
import { SvgCart } from "../svg";

interface IAddToCartButton {
  onClick: () => void;
}

export const AddToCartButton: FC<IAddToCartButton> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.add}>
      <SvgCart className={styles.add__icon} />
    </button>
  );
};
