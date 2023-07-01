import { useMemo } from "react";
import { BurgerButton, CartButton, Logo } from "shared/ui";
import { useAppSelector } from "shared/hooks/redux";
import { FCC } from "shared/types";
import { useNavigate } from "shared/hooks/useNavigate";
import styles from "./Header.module.scss";
import { useCartActions } from "entities/Cart/model";

export const Header: FCC = () => {
  const items = useAppSelector((state) => state.cart.items);
  const count = useMemo(
    () => items.reduce((a, b) => a + b.quantity, 0),
    [items]
  );
  const { openCart } = useCartActions();
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <Logo onClick={() => navigate("/")} />
      <div className={styles.header__buttons}>
        <CartButton
          onClick={() => {
              openCart();
          }}
          count={count}
        />
        <BurgerButton className={styles.header__buttonsBurger} />
      </div>
    </header>
  );
};
