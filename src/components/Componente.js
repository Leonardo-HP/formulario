// crear un componente basado en clases
// extrae el objeto component de react :
import React,{component} from "react";


//componente funcional expresado desde una prop

const Componente = props => <h2> {props.msg}</h2>

//componente funcional 
// function Componente(props){
    // return /*<h2>{props.msg}</h2>;*/
// }


// componente extiende de Component de react clase
// class Componente extends Component{
// render(){
//     return <h2>{this.props.msg} </h2>
// }
// }
export default Componente;