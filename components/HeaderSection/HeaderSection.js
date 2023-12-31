import React from 'react';
import styles from './header.module.css';

const HeaderSection = () => {
    return (
        <header className={styles.masthead}>
            <div className={styles.containerheading}>
                <div className={styles.textContainer}>
                    <h1 className={styles.mastheadHeading}>Bienvenid@ a mi Portafolio</h1>
                    <p className={styles.titleprofession}>Desarrolladora de software</p>
                    <div className={styles.btnbox}>
                        <a href="img/CV.pdf" className={styles.btn} download="CVYURANYULCHUR">Descargar CV</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export { HeaderSection };

