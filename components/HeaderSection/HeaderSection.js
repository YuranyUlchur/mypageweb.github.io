import React from 'react';
import styles from './header.module.css';

const HeaderSection = () => {
    return (
        <header className={styles.masthead}>
            <div className={styles.containerheading}>
                <h1 className={styles.mastheadHeading}>Bienvenid@ a mi Portafolio</h1>
                <p className={styles.titleprofession}>Desarrolladora de software</p>
            </div>
        </header>
    );
};

export { HeaderSection };