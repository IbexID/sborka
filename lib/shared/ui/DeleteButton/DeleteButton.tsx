import { FC } from "react";
import cl from "classnames";
import styles from "./DeleteButton.module.scss";
import { IButton } from "shared/types";
import { SvgDelete } from "../svg";

export const DeleteButton: FC<IButton> = ({ className, onClick }) => {
  return (
    <button onClick={onClick} className={cl(styles.delete, className)}>
      <SvgDelete />
    </button>
  );
};
