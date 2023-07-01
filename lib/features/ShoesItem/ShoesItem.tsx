import { FC, useCallback } from "react";
import styles from "./ShoesItem.module.scss";
import { useCartActions } from "entities/Cart/model";
import { AddToCartButton } from "shared/ui/AddToCartButton";
import Image from "next/image";
import { H3 } from "shared/ui/typography/titles";
import { PriceValue } from "shared/ui/PriceValue";
import Link from "next/link";
import { IShoesItem } from "entities/Shoes/types";

export const ShoesItem: FC<IShoesItem> = ({
  id,
  image,
  price,
  title,
  model,
  highResImage,
}) => {
  const { addToCart } = useCartActions();
  const addItemToCart = useCallback(() => {
    addToCart({ id, image, price, title, model, highResImage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const href = "/shoes/" + id;

  return (
    <div className={styles.shoesItem}>
      <Link href={href}>
        <Image width={228} height={130} src={image} alt={title} />
      </Link>
      <div className={styles.shoesItem__info}>
        <Link className={styles.shoesItem__link} href={href}>
          <H3 className={styles.shoesItem__title}>{title}</H3>
        </Link>
        <AddToCartButton onClick={addItemToCart} />
        <PriceValue value={price} />
      </div>
    </div>
  );
};
