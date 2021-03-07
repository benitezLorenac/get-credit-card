import React, {useContext} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {creditoContext} from "../contexts/credito_context"

export default function DisplayCuotaFija() {
  const valorContext = useContext(creditoContext)
  return (
    <>
      <div className="content">
        <Row className="cuotaFija">
          <Col>
            <span>CUOTA FIJA POR MES</span>
          </Col>
          <Col className="text-right">{`$ ${valorContext.cuota.toFixed(2)}`}</Col>
        </Row>
      </div>
    </>
  );
}
