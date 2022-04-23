import "./ListaProdutos2.css";
import React from "react";
import produtos from "../../data/produtos";

export default (_) => {
  const lp = produtos.map((produto) => {
    return (
      <tr>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PREÇO</th>
          </tr>
        </thead>
        <tbody>{lp}</tbody>
      </table>
    </div>
  );
};
