import { Logo } from 'shared/ui/Logo';
import styles from './Header.module.scss';
import { FCC } from 'shared/types';
import { CartButton } from 'shared/ui';

export const Header: FCC = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <CartButton />
        </header>
    );
};