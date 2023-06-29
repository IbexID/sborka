import { FC, useCallback } from "react";
import styles from "./ShoesItem.module.scss";
import { IShoesItem } from "shared/types";
import { useCartActions } from "entities/Cart/model";
import { AddToCartButton } from "shared/ui/AddToCartButton";
import Image from "next/image";
import { H3 } from "shared/ui/typography/titles";
import { PriceValue } from "shared/ui/PriceValue";

export const ShoesItem: FC<IShoesItem> = ({ id, image, price, title }) => {
  const { addToCart } = useCartActions();
  const addItemToCart = useCallback(() => {
    addToCart({ id, image, price, title });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.shoesItem}>
      <Image width={228} height={130} src={image} alt={title} />
      <div className={styles.shoesItem__info}>
        <H3 className={styles.shoesItem__title}>{title}</H3>
        <AddToCartButton onClick={addItemToCart} />
        <PriceValue value={price} />
      </div>
    </div>
  );
};
