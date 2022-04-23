import "./Mega.css";
import React, { Component } from "react";
import Botoes from "./Botoes";
import QtdeForm from "./QtdeForm";
import Display from "./Display";

export default class Mega extends Component {
  state = { qtde: 1 ,
    listaGeralRetornada: [[]]};

  inc = () => {
    this.setState({
      qtde: this.state.qtde + 1
    });
  };

  dec = () => {
    this.setState({
      qtde: this.state.qtde - 1,
    });
  };

  setJogar = (props) => {
    this.setState({
      listaGeralRetornada: this.gerarNumeros(props.qtde)
    })
  }

  gerarNumeros(props) {
    var cont = 0;
    var numero = 0;
    var listaGeral = [];
    var lista = [];
    var x = 0;
    for (x = 0; x < props.qtde; x++) {
      cont = 0;
      lista = [];
      while (cont < 6) {
        numero = Math.ceil(Math.random() * 60);
        if (!lista.includes(numero, 0)) {
          lista[cont] = numero;
          cont++;
        }
      }
      listaGeral[x] = lista;
    }
    return listaGeral
  };

  render() {
    return (
      <div className="Mega">
        <QtdeForm value={this.state.qtde} />
        <Botoes setJogar={this.setJogar} />
        <Display lista={this.state.listaGeralRetornada}/>
      </div>
    );
  }
}
