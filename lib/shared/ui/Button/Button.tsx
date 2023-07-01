import { FC, ReactNode } from "react";
import cl from "classnames";
import styles from "./Button.module.scss";

interface IButton {
  background: "blue";
  children: ReactNode;
  className?: string;
  onClick: () => void;
}
export const Button: FC<IButton> = ({ background, children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cl(styles.button, styles[`button--${background}`], className)}
    >
      {children}
    </button>
  );
};
