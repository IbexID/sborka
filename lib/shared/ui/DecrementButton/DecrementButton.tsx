import { FC } from "react";
import cl from "classnames";
import styles from "./DecrementButton.module.scss";
import { IButton } from "shared/types";
import { SvgDecrement } from "../svg";

export const DecrementButton: FC<IButton> = ({ className, onClick }) => {
  return (
    <button onClick={onClick} className={cl(styles.decrement, className)}>
      <SvgDecrement />
    </button>
  );
};
