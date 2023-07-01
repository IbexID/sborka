import { FC } from "react";
import cl from "classnames";
import { H2, H3 } from "shared/ui/typography/titles";
import { useAppSelector } from "shared/hooks/redux";
import { CartItem, OrderStats } from "entities/Cart";
import { getOrderTotalPrice } from "shared/utils";
import styles from "./MyBasket.module.scss";
import { CloseButton } from "shared/ui";
import { useCartActions } from "entities/Cart/model";

export const MyBasket: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  const { closeCart } = useCartActions();
  const subtotalPrice = getOrderTotalPrice(cartItems);
  return (
    <div className={cl(styles.basket, isOpen && styles["basket--open"])}>
      {isOpen && (
        <div className={styles.basket__close}>
          <CloseButton onClick={closeCart} />
        </div>
      )}
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
