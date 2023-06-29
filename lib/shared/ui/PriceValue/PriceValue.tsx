import { FC } from "react";
import cl from "classnames";
import styles from "./PriceValue.module.scss";

interface IPriceValue {
  className?: string;
  value: number;
}

export const PriceValue: FC<IPriceValue> = ({ value, className }) => {
  const parsedPrice = Intl.NumberFormat("nb-NO", {
    currency: "USD",
    style: "currency",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }).format(value);

  return <p className={cl(styles.price, className)}>{parsedPrice}</p>;
};
