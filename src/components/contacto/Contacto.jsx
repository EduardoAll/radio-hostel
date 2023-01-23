import React from 'react';
import './Contacto.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from "emailjs-com";
import fondo from '../../media/fondo.jpg';


const Contact = () => {
  function enviarEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_oruzo4o",
        "template_lpvx5qq",
        e.target,
        "ybHc9OAkHEDn1BXDj"
      )
      .then((res) => {
        console.log(res);
      });

      alert('Mensaje enviado con éxito, muchas gracias.');

      e.target.reset();
  }

  return(
    <div className='c w-full'>
      <img src={fondo} alt='fondo' />
      <div className='contact' id='contacto'>
        <div className='aside'>
          <h4 className='title'><i>¡Contactános!</i></h4>
          <p className='text'> Sentite libre de contactarnos para realizar tu consulta. Sea por un proyecto chico o grande, en estudio, a domicilio o como colaborador en un espectáculo. Puedo elaborar un presupuesto a la medida de tus necesidades. </p>
        </div>
        <div className="mail-container">
          <div
            className="recuadro"
            style={{
              width: "60%",
              backgroundColor: "black",
              margin: "0 auto",
              padding: "10px",
            }}
          >
            <h1>Formulario de Contacto</h1>
            <hr />
            <form onSubmit={enviarEmail} id='miForm'>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>
                    <b>Nombre</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  <b>Mensaje</b>
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "50%", margin: "0 auto", marginTop: "20px" }}
              >
                Enviar Correo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;
