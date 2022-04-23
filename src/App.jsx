import "./App.css";
import React from "react";
import MegaLeitao from './components/megaLeitao/MegaLeitao'
import MegaFuncao from "./components/mega/MegaFuncao";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaFilho from "./components/comunicacao/IndiretaFilho";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ListaProdutos2 from "./components/repeticao/ListaProdutos2";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/Aleatorio";
import Aleatorio2 from "./components/Aleatorio2";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

export default (_) => (
  <div className="App">
    <h1> Fundamentos React JS</h1>

    <div className="Cards">
      <Card titulo="#13 - Megasena" color="#c9c9f9">
        <MegaLeitao qtde={8}> </MegaLeitao>
      </Card>
      <Card titulo="#13 - Megasena" color="#c9c9f9">
        <MegaFuncao numeroInicial={1}> </MegaFuncao>
      </Card>
      <Card titulo="#12 - Contador" color="#c2c2c2">
        <Contador numeroInicial={10}> </Contador>
      </Card>
      <Card titulo="Componente Controlado" color="#990990">
        <Input />
      </Card>
      <Card titulo="Comunicação Indireta" color="#990000">
        <IndiretaPai />
      </Card>
      <Card titulo="Comunicação Direta" color="#987655">
        <DiretaPai />
      </Card>
      <Card titulo="Usuário" color="#990">
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo />
        {/* <UsuarioInfo usuario={{}} />
        <UsuarioInfo usuario={{email: 'fernando@gmail.com'}} />
        <UsuarioInfo /> */}
      </Card>
      <Card titulo="Condicional" color="#990">
        <ParOuImpar numero={10}></ParOuImpar>
      </Card>
      <Card titulo="Repetição Produtos Cod3r" color="#010">
        <ListaProdutos2></ListaProdutos2>
      </Card>
      <Card titulo="Repetição Produtos" color="#040">
        <ListaProdutos></ListaProdutos>
      </Card>
      <Card titulo="Repetição" color="#080">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#008">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro"></FamiliaMembro>
          <FamiliaMembro nome="Ana"></FamiliaMembro>
          <FamiliaMembro nome="Gustavo"></FamiliaMembro>
        </Familia>
      </Card>
      <Card titulo="Desafio Aleatório" color="green">
        <Aleatorio2 minimo={3} maximo={9} />
      </Card>
      <Card titulo="Exemplo de Card"> </Card>

      <Card titulo="Desafio Aleatório Adriano">
        <Aleatorio maximo={9} minimo={3} />
      </Card>

      <Card titulo="Com Parâmetro">
        <ComParametro titulo="Situação do aluno" aluno="Adriano" nota={9.0} />
        <ComParametro titulo="Situação da aluna" aluno="Néia" nota={9.6} />
      </Card>

      <Card titulo="Primeiro Exercício">
        <Primeiro />
      </Card>
    </div>
  </div>
);
