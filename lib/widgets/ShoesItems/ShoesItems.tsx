import { FC, useEffect, useState } from "react";
import cl from 'classnames';
import { fetchGetShoes } from "entities/Shoes/api";
import { ShoesItem } from "features/ShoesItem";
import styles from "./ShoesItems.module.scss";
import { IShoesItem } from "entities/Shoes/types";

export const ShoesItems: FC = () => {
  const [shoes, setShoes] = useState<IShoesItem[]>([]);

  useEffect(() => {
    fetchGetShoes().then((data) => {
      setShoes(data);
    });
  }, []);

  return (
    <div className={cl(styles.shoesItems, styles.container)}>
      {shoes.length > 0 &&
        shoes.map((item) => <ShoesItem key={item.id} {...item} />)}
    </div>
  );
};
