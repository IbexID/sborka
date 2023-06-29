import { CartButton, Logo } from "shared/ui";
import { useAppSelector } from "shared/hooks/redux";
import { FCC } from "shared/types";
import styles from "./Header.module.scss";
import { useCartActions } from "entities/Cart/model/store/actions";

export const Header: FCC = () => {
  const items = useAppSelector((state) => state.cart.items);
  const { addToCart, clear } = useCartActions();
  return (
    <header className={styles.header}>
      <Logo />
      <CartButton
        onClick={() => {
          clear()
        }}
        count={items.length}
      />
    </header>
  );
};
