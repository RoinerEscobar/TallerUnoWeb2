import React,{useState} from 'react'
import "./estilos.css";

export const Contador = ({contador,aumentar, disminuir, resetear}) => {
    
    const sumar = () => {

        aumentar();
    };
    const restar = () => {
        
        disminuir();
          
    };

    const reset = () => {
        
        resetear();
          
    };

  return (
    <div>

        <div id='top' class="container">
        <div class="row">
            <div class="col-xl-4 col-md-2 col-lg-4">
            
            </div>
            <div class="col-xl-4 col-12 col-md-8 col-sm-12 col-lg-4">
            <div class="contador">
                  <center> <h7  >contador {contador}</h7> </center>
                    
                    <button id="boton" onClick={sumar}>Aumentar</button>
                    <button id="boton" onClick={restar}>Disminuir</button>
                    <button id="boton"  onClick={reset}>Resetear</button>
                    
                    </div>
                    
            </div>
            <div class="col-xl-4  col-md-2  col-lg-4">
            
            </div>
        </div>
        </div>

        
    </div>
  )
}

export default Contador