import cl from "classnames";
import styles from "./titles.module.scss";
import { FCC } from "shared/types";

export interface ITitle {
  className?: string;
  onClick?: () => void;
}

export const H2: FCC<ITitle> = ({ children, className, onClick }) => {
  return (
    <h2 className={cl(styles.titles, styles.h2, className)}>{children}</h2>
  );
};
