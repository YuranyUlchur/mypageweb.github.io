import React from 'react';
import styles from './header.module.css';
import { AiOutlineHeart } from 'react-icons/ai';

const HeaderSection = () => {
    return (
        <header className={styles.masthead}>
            <div>
                <h2 className={styles.mastheadHeading}>Bienvenid@ a mi portafolio personal</h2>
                <p className={styles.titleprofession}>Soy Yurany ulchur desarrolladora de software, apasionada y creativa, con ganas de aprender y encontrar nuevos retos.</p>
            </div>
        </header>
    );
};

export { HeaderSection };