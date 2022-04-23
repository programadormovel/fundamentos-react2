import "./MegaFuncao.css";
import React, { useState } from "react";

const MegaFuncao = (props) => {
  const [qtdeJogos, setQtdeJogos] = useState(1);
  const [lista, setLista] = useState(Array(6).fill(0));

  function gerarNumeros(qtde) {
    var cont = 0;
    var numero = 0;
    var listaGeral = [];
    var lista = [];
    var x = 0;
    for (x = 0; x < qtde; x++) {
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
    return listaGeral;
  }

  const jogos = lista.map((element) => {
    return (
      <tr>
        {element.map((item) => {
          return <td>{item}</td>
        })}
      </tr>
    );
  });

  return (
    <div className="MegaFuncao">
      <h3>Gerador de Jogos da Mega Sena</h3>
      <table>
        <thead>
          <th>Jogos</th>
        </thead>
        <tbody>{jogos}</tbody>
      </table>
      <input
        min="1"
        max="10"
        type={"number"}
        value={qtdeJogos}
        onChange={(e) => setQtdeJogos(+e.target.value)}
      />
      <button onClick={(_) => setLista(gerarNumeros(qtdeJogos))}>
        Gerar Jogos
      </button>
    </div>
  );
};

export default MegaFuncao;
