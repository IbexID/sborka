import { FC } from "react";
import styles from "./OrderStats.module.scss";
import { H2, H3 } from "shared/ui/typography/titles";
import { PriceValue } from "shared/ui/PriceValue";

interface IOrderStats {
  subtotalPrice: number;
}

const tax = 100;
const shipping = 150;

export const OrderStats: FC<IOrderStats> = ({ subtotalPrice }) => {
  const totalPrice = subtotalPrice + tax + shipping;
  if (!subtotalPrice){
    return null;
  }
  return (
    <ul className={styles.order}>
      <li className={styles.order__item}>
        <p>Subtotal</p>
        <PriceValue value={subtotalPrice} />
      </li>
      <li className={styles.order__item}>
        <p>Tax</p>
        <PriceValue value={tax} />
      </li>
      <li className={styles.order__item}>
        <p>Shipping</p>
        <PriceValue value={shipping} />
      </li>
      <li className={styles.order__item}>
        <H2>Total</H2>
        <PriceValue className={styles.order__total} value={totalPrice} />
      </li>
    </ul>
  );
};
