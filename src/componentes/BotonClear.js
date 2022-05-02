import React from "react";
import '../hojas-de-estilo/BotonClear.css';

const botonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear} >
        {props.children}
    </div>
);

export default botonClear;