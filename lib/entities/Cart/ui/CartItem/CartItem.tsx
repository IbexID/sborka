import { FC } from "react";
import styles from "./CartItem.module.scss";
import { IShoesItemInCart } from "shared/types";
import Image from "next/image";
import { DecrementButton, DeleteButton, IncrementButton } from "shared/ui";
import { useCartActions } from "entities/Cart/model";
import { PriceValue } from "shared/ui/PriceValue";

export const CartItem: FC<IShoesItemInCart> = ({
  id,
  image,
  price,
  title,
  quantity,
}) => {
  const { removeFromCart, decreaseCount, increaseCount } = useCartActions();
  return (
    <div className={styles.cartItem}>
      <Image src={image} width={90} height={51} alt={title + "cart"} />
      <div className={styles.cartItem__info}>
        <div className={styles.cartItem__infoName}>
          <p>{title}</p>
          <DeleteButton
            className={styles.cartItem__delete}
            onClick={() => removeFromCart(id)}
          />
        </div>
        <div className={styles.cartItem__controlsWrapper}>
          <div className={styles.cartItem__controls}>
            <DecrementButton onClick={() => decreaseCount(id)} />
            <p className={styles.cartItem__quantity}>{quantity}</p>
            <IncrementButton onClick={() => increaseCount(id)} />
          </div>
          <PriceValue value={price * quantity} />
        </div>
      </div>
    </div>
  );
};
