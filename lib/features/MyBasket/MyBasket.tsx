import { FC } from "react";
import styles from "./MyBasket.module.scss";
import { H2, H3 } from "shared/ui/typography/titles";
import { useAppSelector } from "shared/hooks/redux";
import { CartItem, OrderStats } from "entities/Cart";
import { getOrderTotalPrice } from "shared/utils/getOrderTotalPrice";

export const MyBasket: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const subtotalPrice = getOrderTotalPrice(cartItems);
  return (
    <div className={styles.basket}>
      <H2 className={styles.basket__title}>My Basket</H2>
      {cartItems.length > 0 && (
        <ul className={styles.basket__list}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </ul>
      )}
      {!cartItems.length && (
        <H3 className={styles.basket__empty}>Basket is empty</H3>
      )}
      <OrderStats subtotalPrice={subtotalPrice} />
    </div>
  );
};
