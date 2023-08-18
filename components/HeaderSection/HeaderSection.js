import React from 'react';
import styles from './header.module.css';
import { AiOutlineHeart } from 'react-icons/ai';

const HeaderSection = () => {
    return (
        <header className={styles.masthead}>
            <div className={styles.containerheading}>
                <h2 className={styles.mastheadHeading}>Bienvenid@ a mi portafolio personal</h2>
                <p className={styles.titleprofession}>Desarrolladora de software</p>
            </div>
        </header>
    );
};

export { HeaderSection };