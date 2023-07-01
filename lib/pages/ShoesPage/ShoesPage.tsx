import { FC } from "react";
import cl from "classnames";
import styles from "./ShoesPage.module.scss";
import { IShoesItem } from "entities/Shoes/types";
import { Button } from "shared/ui";
import { useNavigate } from "shared/hooks/useNavigate";
import { H2 } from "shared/ui/typography/titles";
import { AddToCartButton } from "shared/ui/AddToCartButton";
import { useCartActions } from "entities/Cart/model";
import { PriceValue } from "shared/ui/PriceValue";

export const ShoesPage: FC<IShoesItem> = ({
  id,
  image,
  price,
  title,
  highResImage,
  model,
}) => {
  const navigate = useNavigate();
  const { addToCart } = useCartActions();

  const goBack = () => {
    navigate("/");
  };

  const addItemToCart = () => {
    addToCart({ id, image, model, price, title, highResImage });
  };

  return (
    <div className={styles.shoes}>
      <Button onClick={goBack} className={styles.shoes__back} background="blue">
        Back in catalog
      </Button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={title}
        src={highResImage ?? image}
        className={cl(
          styles.shoes__image,
          /* в фигме изображение с бордером */
          highResImage && styles["shoes__image--highres"]
        )}
      />
      <div className={styles.shoes__info}>
        <H2 className={styles.shoes__infoTitle}>{title}</H2>
        <p>Item model number: {model}</p>
      </div>
      <div className={styles.shoes__add}>
        <AddToCartButton onClick={addItemToCart} />
        <PriceValue className={styles.shoes__price} value={price} />
      </div>
    </div>
  );
};
