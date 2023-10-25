import React, { useState } from 'react';
import styles from './portafolio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscTerminal } from "react-icons/vsc";
import { renderToString } from 'react-dom/server';
import { BiCalculator, BiFace, BiMoviePlay } from "react-icons/bi";



const PortfolioSection = () => {
    const [showSkills, setShowSkills] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Simple shell",
            imageSrc: renderToString(<VscTerminal  style={{ color: 'white' }} />),
            description: "Implementación de un intérprete de linux que tiene un comportamiento similar al comando sh en linux, maneja conceptos del kernel de linux, llamadas al sistema y otros.",
            Habilidades: ["C y", "Bash."],
            link: "https://github.com/YuranyUlchur/holbertonschool-simple_shell",
        },
        {
            id: 2,
            title: "Calculadora con React",
            imageSrc: renderToString(<BiCalculator style={{ color: 'white' }} />),
            description: "Calculadora creada en comienzos de aprendizaje de React, colocando en practica mis habilidades y conocimientos en ese momento.",
            Habilidades: ["React.js y", "Next.js."],
            link: "https://github.com/YuranyUlchur/calculatornext",
        },
        {
            id: 3,
            title: "Holbie talen hub",
            imageSrc: renderToString(<BiFace style={{ color: 'white' }}/>),
            description: "Proyecto hecho para la empresa Coderise, donde se realizo un sistema de reclutamiento entre empresas y estudiantes llamado Holbie Talent Hub.",
            Habilidades: ["HTML,", "SCSS,", "TypeScript,", "React.js,", "Next.js y", "JavaScript."],
            link: "https://github.com/YuranyUlchur/holbie-talent-hub-client",

        },
        {
            id: 4,
            title: "Film Catalog",
            imageSrc: renderToString(<BiMoviePlay style={{ color: 'white' }}/>),
            description: "Proyecto hecho para desarrollar habilidades y colocar en practica conocimientos",
            Habilidades: ["HTML,", "CSS,", "React-Bootstrap,", "React.js y", "JavaScript."],
            link: "https://github.com/YuranyUlchur/Project-film-catalog",
        },
    ];

    const handleSkillsClick = () => {
        setShowSkills((prevShowSkills) => !prevShowSkills);
    };


    return (
        <section id="portfolio">
            <h2 className={styles.pageSectionHeading}>Portafolio</h2>
            <div className='container my-4'>
                <div className="row justify-content-around">
                    {projects.map((project) => (
                        <div key={project.id} className={`card col-md-4 mb-4 ${styles.cardProjects} `}
                            style={{
                                background: 'transparent',
                                color: 'white',
                                opacity: '1',
                                border: '10px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease',
                                boxShadow: '0 4px 8px rgba(31, 226, 226, 0.322)',
                            }}>
                            <div className={`card-body text-center ${styles.transparentCard}`}>
                                <img
                                    className="card-img-top img-fluid"
                                    src={`data:image/svg+xml,${encodeURIComponent(project.imageSrc)}`}
                                    alt={project.title}
                                    style={{
                                        maxWidth: '50px',
                                        maxHeight: '50px',
                                        margin: ' auto',
                                        display: 'block',
                                   

                                    }}
                                />
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <div className="d-flex flex-column align-items-center mt-auto">
                                    <h6 onClick={handleSkillsClick} className={styles.skillsToggle}>
                                        Habilidades {showSkills ? '▲' : '▼'}
                                    </h6>
                                    {showSkills && (
                                        <div className={`${styles.skillsDropdown} mt-2`}>
                                            <ul className="list-inline">
                                                {project.Habilidades.map((skill) => (
                                                    <li key={skill} className="list-inline-item">{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <button className={styles.buttonlink}>Ver enlace del proyecto</button>
                                    </a>
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