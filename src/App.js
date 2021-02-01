import React, {useState} from 'react';
import "./App.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {MIN_AMOUNT, MAX_AMOUNT} from "./constants";

const App= ()=> {
  const [value, setValue] = useState(MIN_AMOUNT);

  const onChangeHandler = event => {
    setValue(event.target.value);
  };

  //funcion para el slider, como no es un componente controlado no puedo usar el e.target.value
  const onChangeSliderHandler = (newValue) => {   
    setValue(newValue);
  }

  return (
    <Container>
      <Row sm={10}>
        <Col>
          <div className="layout">
            <div className="app">
              <h2>Simulá tu crédito</h2>
              <div className="content">
                <Row className={"row-no-gutters"}>
                  <Col sm={6}>
                    <span>MONTO TOTAL</span>
                  </Col>
                  <Col sm={6} className={"text-right"}>
                    <input
                      className={"my-md-0"}
                      value={value}
                      onChange={onChangeHandler}
                      onBlur={onChangeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <Slider 
                    min={MIN_AMOUNT}
                    max={MAX_AMOUNT}
                    step={100}
                    value={value}
                    onChange={onChangeSliderHandler}
                  />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span>
                      $ {MIN_AMOUNT}
                    </span>
                  </Col>
                  <Col className="text-right">
                    <span>
                      $ {MAX_AMOUNT}
                    </span>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
