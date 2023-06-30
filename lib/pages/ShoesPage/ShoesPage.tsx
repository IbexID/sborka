import { FC } from 'react';
import styles from './ShoesPage.module.scss';
import { IShoesItem } from 'shared/types';

export const ShoesPage: FC<IShoesItem> = ({id, image, price, title}) => {
    return (
        <div className={styles.shoes}>
            
        </div>
    );
};