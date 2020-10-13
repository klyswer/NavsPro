import React from "react";

const InformacionLink = ({
  title,
  texto1,
  texto2,
  texto3,
  texto4,
  spanTitle,
  spanTexto1,
  spantexto2,
  buttonLink,
  NombreBtn,
  spanLink,
  link
}) => {
  if (buttonLink==="douglas") {
    return (
      <>
        <div className="contenido_con_btn">
          <title>{title}</title>
          <h1>{title}</h1>
          {texto1 && <p className="texto1">{texto1}</p>}
          {texto2 && <p className="texto2">{texto2}</p>}
          {texto3 && <p className="texto3">{texto3}</p>}
          {texto4 && <p className="texto4">{texto4}</p>}
          <button>
            <a href={link}>{NombreBtn}</a>
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="contenido_sin_btn">Soy un texto aleatorio <span><a href={link}>{spanLink}</a></span></div>
    </>
  );
};

export default InformacionLink;
