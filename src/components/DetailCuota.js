import React, {useState, useEffect} from "react";
import moment from "moment";

export default function Detail({plazo, intervalo, title}) {
  const [cuotas, setCuotas] = useState([]);

  const calcularFechasCuotas = () => {
    const newCuotas = [];

    for (let i = 1; i <= plazo; i++) {
      newCuotas.push(
        moment()
          .add(intervalo * i, "days")
          .format("D/MM/y")
      );
    }

    setCuotas(newCuotas);

    console.log("cuotas", cuotas);
  };

  useEffect(calcularFechasCuotas, [plazo]);

  return (
    <div>
      {title}
      <ul>
        {cuotas.map((cuota) => {
          return <li>{cuota}</li>;
        })}
      </ul>
    </div>
  );
}
