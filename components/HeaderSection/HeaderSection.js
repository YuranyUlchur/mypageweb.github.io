import React from 'react';
import styles from './header.module.css';
import { AiOutlineHeart } from 'react-icons/ai';

const HeaderSection = () => {
    return (
        <header className={styles.masthead}>
            <div>
                <img className={styles.mastheadAvatar} src="/img/fotoperfil.jpeg"/>
                <h2 className={styles.mastheadHeading}>Bienvenid@ a mi portafolio personal</h2>
                <p className={styles.titleprofession}>My name is Yurany ulchur and I am a passionate and creative software developer, eager to learn and find new challenges.</p>
            </div>
        </header>
    );
};

export { HeaderSection };