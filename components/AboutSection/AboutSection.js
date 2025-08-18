import React from 'react';
import styles from './about.module.css';

const AboutSection = () => {
    return (
        <section className={`${styles.pageSection} ${styles.about}`} id="about">
            <div className={styles.contentWrapper}>
                <h2 className={styles.pageSectionHeading}>Descubre mi visión y pasión 🌟</h2>
                <div className={styles.row}>
                    <div className={styles.avatarBox}>
                        <img src="img/avatar.png"
                            alt="Ilustración de desarrolladora de software"
                            className={styles.avatar}
                        />
                        <div className={styles.avatarCaption}>
                            Tu visión, mi código.
                        </div>
                    </div>
                    <div className={styles.boxabout}>
                        <p className={styles.paragraph}>
                            ¡Hola! 👋 Me presento: Soy una creadora digital apasionada por transformar ideas en soluciones tangibles y funcionales. Mi viaje en el mundo del desarrollo de software es una constante búsqueda de innovación y excelencia.
                        </p>
                        <p className={styles.paragraph}>
                            Cada línea de código que escribo es impulsada por la curiosidad incansable y un deseo profundo de resolver desafíos complejos con diseños eficientes. Creo que la tecnología es una herramienta poderosa para construir un futuro mejor, y me dedico a diseñar experiencias digitales que no solo funcionen, sino que también inspiren.
                        </p>
                        <p className={styles.paragraph}>
                            Estoy en un aprendizaje continuo, siempre explorando las fronteras del conocimiento para mantenerme a la vanguardia. Para mí, el desarrollo es más que una profesión; es una forma de arte donde la dedicación y la persistencia son mis pinceles. ¡Me emociona ver cómo la lógica se convierte en magia en la pantalla! ✨
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};
export { AboutSection };