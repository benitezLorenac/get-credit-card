import React, {useContext} from "react";
import RangeSelector from "./RangeSelector";

import {MIN_PLAZO, MAX_PLAZO} from "../constants";
import {creditoContext} from "../contexts/credito_context";

export default function RangeSelectorPlazo() {
  const valorContext = useContext(creditoContext);

  return (
    <>
      <RangeSelector
        min={MIN_PLAZO}
        max={MAX_PLAZO}
        initialState={valorContext.plazo}
        label="PLAZO"
        onChange={(valorActual) => {
          valorContext.dispatchPlazo({
            type: "UPDATE_PLAZO",
            payload: valorActual,
          });
        }}
      />
    </>
  );
}
