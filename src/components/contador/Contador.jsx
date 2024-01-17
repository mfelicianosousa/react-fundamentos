import "./Contador.css";
import React, { Component } from 'react';

import PassoForm from "./PassoForm";
import Botoes from "./Botoes";
import Display from "./Display";

class Contador extends Component {

   state = {
      numero : this.props.numeroInicial || 0,
      passo : this.props.passoInicial || 1
   }

//    constructor(props){
//        super(props);
//        this.inc = this.inc.bind(this);
//        this.state = {
//             numero : props.numeroInicial
//        }
//    }

   inc = () => {
      this.setState({
            numero: this.state.numero + this.state.passo
      });
   }
   dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

   increment() {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    decrement() {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso,
        })
    }
    render(){
     return (
        <div className="Contador">
            <h2>Contador</h2>
            <Display numero={this.state.numero}/>
            <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
            <Botoes setInc={this.inc}
                    setDec={this.dec}
            />
           
           
        </div>
     )
   }
}

export default Contador;
