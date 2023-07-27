import React from 'react';
import styles from './header.module.css';
import { AiOutlineHeart } from 'react-icons/ai';

const HeaderSection = () => {
    return (
        <header className={styles.masthead}>
            <div>
                <img className={styles.mastheadAvatar} src="/img/fotoperfil.jpeg"/>
                <h1 className={styles.mastheadHeading}>Bienvenid@ a mi Portafolio</h1>
                <div className={styles.dividerCustom}>
                    <div className={styles.dividerCustomLine}></div>
                    <div className={styles.dividerCustomIcon}>
                        <AiOutlineHeart />
                    </div>
                    <div className={styles.dividerCustomLine}></div>
                </div>
                <p className={styles.titleprofession}>Desarrolladora de software</p>
            </div>
        </header>
    );
};

export { HeaderSection };