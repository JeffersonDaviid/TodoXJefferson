import React from "react";
import "../stylesheets/Testimonios.css";

const Testimonios = (props) => {
  return (
    <>
      {props.TestimoniosApp.map((testimonio) => (
        <div className="container-testimonio">
          <img
            src={require(`../images/imagen-${testimonio.imagen}.png`)}
            alt="imagen de "
          ></img>
          <div className="container-texto-testimonio">
            <span className="nombre">
              <b>{testimonio.nombre}</b> in <strong>{testimonio.pais}</strong>
            </span>
            <span className="trabajo">
              {testimonio.cargo} at {testimonio.trabajo}
            </span>
            <span className="testimonio">"{testimonio.testimonio}"</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Testimonios;
