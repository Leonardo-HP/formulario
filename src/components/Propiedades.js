import React from "react";

//tiene como parametro las props que son un objeto 
export default function Propiedades(props){
    return(
        <div>
        <h2>{props.porDefecto}</h2>
    
        <ul>
        {/* //tipos de datos  */}

{/* las props son valores que recibe un componente hijo de uno padre, se agrupan como un objeto llamado props, el cual puede recibir diferentes tipos de datos , como:
 */}

            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano ? "Verdadero":"Falso"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
            <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            <li>{props.elementoReact}</li>
       
       
       
        </ul>
        </div> 
    );
}

Propiedades.defaultProps={
    porDefecto: "Las props"
}