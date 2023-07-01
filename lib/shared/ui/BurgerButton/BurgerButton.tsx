import { FC } from "react";
import cl from 'classnames';
import styles from "./BurgerButton.module.scss";
import { SvgBurger } from "../svg";

interface IBurgerButton {
  className?: string;
}
export const BurgerButton: FC<IBurgerButton> = ({ className }) => {
  return (
    <button className={cl(styles.burger, className)}>
      <SvgBurger />
    </button>
  );
};
