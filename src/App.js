import React, {useState, useContext} from "react";
import {creditoContext} from "./contexts/credito_context";
import "rc-slider/assets/index.css";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DisplayCuotaFija from "./components/DisplayCuotaFija";
import RangeSelectorPlazo from "./components/RangeSelectorPlazo";
import RangeSelectorMontoTotal from "./components/RangeSelectorMontoTotal";
import DetailCuota from "./components/DetailCuota";
import Checkout from "./components/Checkout";
import styled from "styled-components";
import {PATH_DETALLE_CUOTAS, PATH_SIMULADOR, PATH_CREDITO} from "./routes";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ToogleLink from "./components/ToggleLink";

const App = () => {
  const valorContext = useContext(creditoContext);
  const BotonCompra = styled(Button)`
    font-size: 30px;

    &:hover {
      background-color: green !important;
    }
  `;

  return (
    <Router>
      <Switch>
        <Container>
          <Row sm={10}>
            <Col>
              <div className="layout">
                <div className="app">
                  <Route path={PATH_SIMULADOR}>
                    <h2>Simulá tu crédito</h2>

                    <RangeSelectorMontoTotal />
                    <RangeSelectorPlazo />

                    <DisplayCuotaFija />
                  </Route>
                  <Route path={PATH_DETALLE_CUOTAS}>
                    <DetailCuota
                      plazo={valorContext.plazo}
                      intervalo={15}
                      title={"Detalle de las cuotas"}
                    />
                  </Route>
                  <Route path={PATH_CREDITO}>
                    {" "}
                    <Checkout />{" "}
                  </Route>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <BotonCompra>OBTENÉ CRÉDITO</BotonCompra>
            </Col>
            <Col>
              <ToogleLink
                ruta1={{url: "/detalle", label: "Ver detalle"}}
                ruta2={{url: "/simulador", label: "ver simulador"}}
              />
            </Col>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
