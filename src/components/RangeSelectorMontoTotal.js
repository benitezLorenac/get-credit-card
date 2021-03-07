import React, {useContext} from "react";
import RangeSelector from "./RangeSelector";

import {MIN_MONTO_TOTAL, MAX_MONTO_TOTAL} from "../constants";

import {creditoContext} from "../contexts/credito_context";

export default function RangeSelectorMontoTotal() {
  const valorContexto = useContext(creditoContext);

  return (
    <>
      <RangeSelector
        min={MIN_MONTO_TOTAL}
        max={MAX_MONTO_TOTAL}
        label="MONTO TOTAL"
        step={100}
        symbol="$"
        onChange={(valorActual) => {
          valorContexto.dispatchMontoTotal({
            type: "UPDATE_MONTO_TOTAL",
            payload: valorActual,
          });
        }}
        initialState={valorContexto.monto}
      />
    </>
  );
}
