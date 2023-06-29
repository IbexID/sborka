import { FC } from 'react';
import styles from './Logo.module.scss';
import { SvgLogo } from '../svg';

export const Logo: FC = () => {
    return (
        <div className={styles.logo}>
            <SvgLogo />
            <p className={styles.logo__text}>.shop</p>
        </div>
    );
};