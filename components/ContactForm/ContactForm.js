import React from 'react';
import styles from './contactform.module.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Siempre estoy dispuesta a charlar.</h2>
          <p className={styles.subtitle}>
            <strong>Envíame un correo electrónico</strong> a
          </p>
          <a href="mailto:ulchuryurani80@gmail.com" className={styles.email}>
            ulchuryurani80@gmail.com
          </a>
          <p className={styles.subtitle}>o escribeme en las redes sociales.</p>

          <div className={styles.socials}>
            <a
              href="https://github.com/YuranyUlchur"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yuranyulchur/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaLinkedinIn />
            </a>
                        <a
              href="https://twitter.com/YuranyUlchur"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className={styles.imageBlock}>
          <img
            src="img/animacion.png"
            alt="Ilustración Yurany"
            className={styles.avatar}
          />
        </div>
      </div>
    </section>
  );
};

export { ContactForm };