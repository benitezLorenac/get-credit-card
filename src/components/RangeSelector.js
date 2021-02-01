import react, {useState, useRef} from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RangeSelector() {
    return (
        <div className="content">
      <Row className={"row-no-gutters"}>
        <Col sm={6}>
          <span></span>
        </Col>
        <Col sm={6} className={"text-right"}>
          <input
          
          />
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>
          </span>
        </Col>
        <Col className="text-right">
          <span>
          </span>
        </Col>
      </Row>
    </div>
    )
}
