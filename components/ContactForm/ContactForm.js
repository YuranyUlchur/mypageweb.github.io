import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import style from './contactform.module.css';

const ContactForm = () => {
    const [mensaje, setMensaje] = useState('');
    const [correoEnviado, setCorreoEnviado] = useState(false);

    // Estados iniciales para los campos del formulario
    const initialState = {
        nombre: '',
        email: '',
        mensaje: ''
    };
    
    const [formularioData, setFormularioData] = useState(initialState);

    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bjhzas4', 'template_lgy35qu', e.target, 'TtFg-nquvygZzG046')
            .then((res) => {
                console.log(res);
                setMensaje('Correo enviado con éxito✔️');
                setCorreoEnviado(true);
                // Reiniciar los campos del formulario
                setFormularioData(initialState);
            })
            .catch((error) => {
                console.error(error);
                setMensaje('Error al enviar el correo ❌');
                setCorreoEnviado(true);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Actualizar el estado del formulario con los nuevos valores
        setFormularioData({
            ...formularioData,
            [name]: value
        });
    };

    return (
        <div className={style.containerForm} id="contact">
            <div className={style.formwrapper}>
                <h1 className={style.formtitles}>Formulario de Contacto 📩</h1>
                {correoEnviado && <p>{mensaje}</p>}
                <form onSubmit={enviarEmail}>
                    <div className={style.formrow}>
                        <div className={style.formgroup} >
                            <h3 className={style.formtitles}>Tu nombre</h3>
                            <input
                                type="text"
                                className={style.formcontrol}
                                id="nombre"
                                name="nombre"
                                value={formularioData.nombre} // Establecer el valor del campo
                                onChange={handleInputChange} // Manejar cambios en el campo
                            />
                        </div>
                        <div className={style.formgroup}>
                            <h3 className={style.formtitles}>Tu email</h3>
                            <input
                                type="text"
                                className={style.formcontrol}
                                id="email"
                                name="email"
                                value={formularioData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className={style.formgroup}>
                        <h3 className={style.formtitles}>Mensaje</h3>
                        <textarea
                            type="text"
                            className={style.formcontrol}
                            id="mensaje"
                            name="mensaje"
                            value={formularioData.mensaje}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <button type="submit" className={style.formbutton}>Enviar Correo</button>
                </form>
                <h6>Conectar con Yurany directamente por correo a través de este formulario.</h6>
            </div>
        </div>
    )
}

export { ContactForm }
