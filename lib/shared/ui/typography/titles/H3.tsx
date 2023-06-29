import cl from "classnames";
import styles from "./titles.module.scss";
import { FCC, IFCWithClassName } from "shared/types";

export const H3: FCC<IFCWithClassName> = ({ children, className }) => {
  return <h3 className={cl(styles.titles, styles.h3, className)}>{children}</h3>;
};
