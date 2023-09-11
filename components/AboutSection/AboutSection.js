import React from 'react';
import styles from './about.module.css';

const AboutSection = () => {
    return (
        <section className={`${styles.pageSection} ${styles.about}`} id="about">
            <div>
                <h2 className={styles.pageSectionHeading}>Acerca de mi</h2>
                <div className={styles.row}>
                    <div className={styles.boxabout}>
                        <p>
                        Soy un desarrolladora de software apasionada con habilidades en C, Python, SQL y JavaScript.
                        Mi enfoque se basa en la dedicación y la persistencia para superar cualquier reto que se me presente.
                        Con una mentalidad orientada a la resolución de problemas, busco constantemente soluciones innovadoras y eficientes.
                        Estoy comprometida con el aprendizaje continuo y siempre estoy dispuesta a adquirir nuevos conocimientos para mejorar mis habilidades
                        y mantenerme al día en el campo de la tecnología.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export { AboutSection };