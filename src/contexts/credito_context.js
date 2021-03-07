import React, {useState, useEffect, useReducer} from "react";
import {MIN_MONTO_TOTAL, MIN_PLAZO} from "../constants";

export const creditoContext = React.createContext();

export default function CreditoContextProvider({children}) {
  function montoTotalReducer(state, action) {
    switch (action.type) {
      case "UPDATE_MONTO_TOTAL":
        return action.payload;
      /* 
      case "CLEAR_MONTO_TOTAL":
        return 0;

      case "ADD_AMOUNT":
        return action.payload + state; */
    }
  }

  function plazoReducer(state, action){
    switch(action.type){
      case "UPDATE_PLAZO":
        return action.payload;
    }

  }

  const [montoTotal, dispatchMontoTotal] = useReducer(
    montoTotalReducer,
    MIN_MONTO_TOTAL
  );

  const [plazo, dispatchPlazo] =useReducer (plazoReducer, MIN_PLAZO)
  const [cuotasFijas, setCuotasFijas] = useState(0);

  const valorContexto = {
    plazo,
    monto: montoTotal,
    cuota: cuotasFijas,
    dispatchMontoTotal,
    dispatchPlazo,
  };

  const updateCuotasFijas = () => {
    setCuotasFijas(montoTotal / plazo);
  };

  useEffect(updateCuotasFijas);

  return (
    <creditoContext.Provider value={valorContexto}>
      {children}
    </creditoContext.Provider>
  );
}
