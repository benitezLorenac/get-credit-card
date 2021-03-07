import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function ToggleLink({ruta1, ruta2}) {
  const [destino, setDestino] = useState(ruta1.url);
  const [label, setLabel] = useState(ruta1.label);

  const BotonToogle = styled(Link)`
    font-size: 20px;
    color: white;
    background-color: red !important;
    padding: 5px;
  `;

  function handleClick() {
    if (destino == ruta1.url) {
      setDestino(ruta2.url);
      setLabel(ruta2.label);
    } else {
      setDestino(ruta1.url);
      setLabel(ruta1.label);
    }
  }

  return (
    <BotonToogle onClick={handleClick} to={destino}>
      {label}
    </BotonToogle>
  );
}
