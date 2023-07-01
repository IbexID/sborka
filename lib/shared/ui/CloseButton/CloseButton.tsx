import { FC } from "react";
import styles from "./CloseButton.module.scss";
import { SvgClose } from "../svg";

interface ICloseButton {
  onClick: () => void;
  className?: string;
}

export const CloseButton: FC<ICloseButton> = ({ onClick, className }) => {
  return (
    <button title="close" onClick={onClick} className={className}>
      <SvgClose />
    </button>
  );
};
