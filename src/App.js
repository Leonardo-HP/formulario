import React from "react"
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";

function App() {
  //al ser una funcion javascript podemos agregar variables dentro 

let nombre ="Leonardo";
let auth = false;
let estaciones = ["Primavera","Verano","otoño","invierno"]

  return (
    <div className="App">

  
      <header className="App-header">
      <section>
        <img src={logo} className="App-logo" alt="logo" />

  {/* el For  se reemplaza por HTML  */}
 
  <br/>

  <br/>

        <label htmlFor = "nombre">Nombre</label>
  
  {/* en este ejemplo usamos la etiqueta para llevar el cursor a el input nombre  */}


        <input type="text" id="nombre" />
        <h1>{nombre}</h1>

<p>
        {auth ? "el usuario esta logueado" : "El usuario no esta loggeado"}

</p>

<ul>
{/* todos los li tienen que tener un Key unico */}
 {estaciones.map((el,index) => 
 <li key={index}> {el} </li>) }
</ul>

        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
      
      <section>
        <Componente msg= "Hola soy un componente funcional expresado desde una prop"/>
        <hr></hr>
        <Propiedades        
         cadena="Esto es una cadena de texto"          
         numero={19}           
         booleano={true}
         arreglo={[1,2,3]}
         objeto={{nombre:"Leonardo",correo:"ba.leonardohp@gmail.com"}}
         funcion = {num =>num * num}
         elementoReact={ <i>Esto es un elemento React</i>}

        />  




      </section>
</header>
    </div>

// para agregar un div u otro elemento  debemos incluirlo en un react fragment 
//<> </>
    // <div></div>

  );
}

export default App;


//https://babeljs.io/ No usamos etiquetas HTML 
//usamos etiquetas JSX que aunque parecidas debemos seguir algunas reglas de como aplicarlas
//babel i0 > try it out para convertir 

//! todo debe estar dentro de un contenedor padre 
//<></> = puede ser un contenedor vacio 

// /*<section>
// <div className= "container">
// hola mundo 
// </div>

// <article></article>
// </section>*//

// React.createElement(
//   "section",
//   null,
//   /*#__PURE__*/ React.createElement(
//     "div",
//     {
//       className: "container"
//     },
//     "hola mundo"
//   ),
//   /*#__PURE__*/ React.createElement("article", null)
// );

