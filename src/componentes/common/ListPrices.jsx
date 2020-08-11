import React from "react";

const ListPrices = ({ listaPrecios }) => {
  return (
    <div className="list_prices">
      Precios
      <ul>
        <li><span>1 Litro: </span>{`$ ${listaPrecios[0]}`}</li>
        <li><span>2 Litro: </span>{`$ ${listaPrecios[1]}`}</li>
        <li><span>5 Litro: </span>{`$ ${listaPrecios[2]}`}</li>
      </ul>
    </div>
  );
};

export default ListPrices;
