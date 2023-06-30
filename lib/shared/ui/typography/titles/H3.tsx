import cl from "classnames";
import styles from "./titles.module.scss";
import { FCC } from "shared/types";
import { ITitle } from "./H2";

export const H3: FCC<ITitle> = ({ children, className, onClick }) => {
  return <h3 onClick={onClick} className={cl(styles.titles, styles.h3, className)}>{children}</h3>;
};
