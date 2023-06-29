import cl from "classnames";
import styles from "./titles.module.scss";
import { FCC, IFCWithClassName } from "shared/types";

export const H2: FCC<IFCWithClassName> = ({ children, className }) => {
  return (
    <h2 className={cl(styles.titles, styles.h2, className)}>{children}</h2>
  );
};
