import { FC } from "react";
import cl from 'classnames';
import styles from "./IncrementButton.module.scss";
import { IButton } from "shared/types";
import { SvgIncrement } from "../svg";

export const IncrementButton: FC<IButton> = ({ className, onClick }) => {
  return (
    <button onClick={onClick} className={cl(styles.increment, className)}>
      <SvgIncrement />
    </button>
  );
};
