import { FC } from "react";
import styles from "./Logo.module.scss";
import { SvgLogo } from "../svg";
interface ILogo {
  onClick?: () => void;
}
export const Logo: FC<ILogo> = ({ onClick }) => {
  return (
    <div className={styles.logo} onClick={onClick}>
      <SvgLogo />
      <p className={styles.logo__text}>.shop</p>
    </div>
  );
};
