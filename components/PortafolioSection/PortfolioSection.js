import React from 'react';
import styles from './portafolio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const skillImages = {
    'C': 'img/c.png',
    'Bash': 'img/bash.png',
    'HTML': 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
    'TypeScript': 'img/typescript.png',
    'React.js': 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    'Next.js': 'img/nextjs.png',
    'JavaScript': 'img/javascript.png',
    'Bootstrap': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
    'Redux': 'img/redux.png',
    'CSS': 'https://cdn-icons-png.flaticon.com/512/888/888847.png',
};

const PortfolioSection = () => {
    const projects = [
        {
            id: 1,
            title: "Simple shell",
            imageSrc: 'img/icon.png',
            description: "Implementación de un intérprete de linux que tiene un comportamiento similar al comando sh en linux, maneja conceptos del kernel de linux, llamadas al sistema y otros.",
            Habilidades: ["C", "Bash"],
            link: "https://github.com/YuranyUlchur/holbertonschool-simple_shell",
        },
        {
            id: 3,
            title: "Holbie talent hub",
            imageSrc: 'img/web.png',
            description: "Proyecto hecho para la empresa Coderise, donde se realizo un sistema de reclutamiento entre empresas y egresados especializados en desarrollo de software llamado",
            Habilidades: ["HTML", "CSS", "TypeScript", "React.js", "Next.js", "JavaScript"],
            link: "https://github.com/YuranyUlchur/holbie-talent-hub-client",
        },
        {
            id: 2,
            title: "Screen Stream",
            imageSrc: 'img/user.png',
            description: "Desarrollo y consumo de API para datos multimedia y comunicación con API de peliculas",
            Habilidades: ["React.js", "CSS", "Bootstrap", "JavaScript", "Redux"],
            link: "https://github.com/YuranyUlchur/screen-stream",
        },
        {
            id: 4,
            title: "Film Catalog",
            imageSrc: 'img/pc.png',
            description: "Proyecto hecho para desarrollar habilidades y colocar en practica conocimientos",
            Habilidades: ["HTML", "CSS", "Bootstrap", "React.js", "JavaScript"],
            link: "https://github.com/YuranyUlchur/Project-film-catalog",
        },
    ];

    return (
        <section id='portafolio' className={styles.portafolio}>
            <h2 className={styles.pageSectionHeading}>Portafolio</h2>
            <div className={styles.portfolioGridContainer}>
                <div className={styles.portfolioGrid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.cardContent}>
                                <div className={styles.projectHeader}>
                                    <div className={styles.iconContainer}>
                                        <div className={styles.imageOverlay}>
                                            <img src={project.imageSrc} alt={project.title} className={styles.projectImage} />
                                        </div>
                                    </div>
                                    <div className={styles.projectInfo}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                            <h5 className={styles.projectTitle}>
                                                {project.title}
                                                <i className={`fas fa-paper-plane ${styles.icon}`}></i>
                                            </h5>
                                        </a>
                                        <p className={styles.projectDescription}>{project.description}</p>
                                    </div>
                                </div>
                                <div className={styles.skillsWrapper}>
                                    <ul className={styles.skillsList}>
                                        {project.Habilidades.map((skill) => (
                                            <li key={skill} className={styles.skillItem}>
                                                <img
                                                    src={skillImages[skill]}
                                                    alt={skill}
                                                    className={styles.skillImageSmall}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { PortfolioSection };