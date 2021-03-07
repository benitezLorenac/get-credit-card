import React from 'react';
import ResumenCredito from "./ResumenCredito";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Checkout() {
    return (
        <div>
            <ResumenCredito/>
            <form>
                <Row>
                    <Col>
                        <label>Nombre:</label>
                        <input type="text"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Apellido:</label>
                        <input type="text"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Dni:</label>
                        <input type="text"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>
                            Aceptar crédito
                        </Button>
                    </Col>
                    <Col>
                        <Button>
                            Volver
                        </Button>
                    </Col>
                </Row>
                
            </form>
        </div>
    )
}
