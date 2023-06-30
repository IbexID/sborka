import { FC } from "react";
import styles from "./MyBasket.module.scss";
import { H2 } from "shared/ui/typography/titles";
import { useAppSelector } from "shared/hooks/redux";
import { CartItem } from "entities/Cart";

export const MyBasket: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <div className={styles.basket}>
      <H2>My Basket</H2>
      <ul className={styles.basket__list}>
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
      </ul>
    </div>
  );
};
