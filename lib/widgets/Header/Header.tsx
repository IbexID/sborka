import { BurgerButton, CartButton, Logo } from "shared/ui";
import { useAppSelector } from "shared/hooks/redux";
import { FCC } from "shared/types";
import styles from "./Header.module.scss";
import { useCartActions } from "entities/Cart/model/store/actions";
import { useMemo } from "react";

export const Header: FCC = () => {
  const items = useAppSelector((state) => state.cart.items);
  const count = useMemo(
    () => items.reduce((a, b) => a + b.quantity, 0),
    [items]
  );
  const { clear } = useCartActions();
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__buttons}>
        <CartButton
          onClick={() => {
            clear();
          }}
          count={count}
        />
        <BurgerButton className={styles.header__buttonsBurger} />
      </div>
    </header>
  );
};
