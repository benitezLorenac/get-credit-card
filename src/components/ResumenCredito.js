import React, { useContext } from 'react';
import {creditoContext} from "../contexts/credito_context";

export default function ResumenCredito() {
    const valorContexto = useContext(creditoContext);
    return (
        <div>
            <p>Monto total: <span>{valorContexto.monto}</span></p>
            <p>Cantidad de cuotas: <span>{valorContexto.plazo}</span></p>
            <p>Monto cuota fija: <span>{`$ ${valorContexto.cuota.toFixed(2)}`}</span></p>
        </div>
    )
}
