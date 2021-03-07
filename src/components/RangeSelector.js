import React, {useState, useRef} from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RangeSelector({
  min,
  max,
  label,
  step,
  symbol,
  onChange,
  initialState
}) {
  console.log("onChange", onchange);
  const [value, setValue] = useState(initialState);

  const valueRef = useRef(null);

  const handleValueBlur = () => {
    console.log("blur");
    console.log(value);
    if (value < min || value > max) {
      valueRef.current.focus();
    }
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="content">
      <Row className={"row-no-gutters"}>
        <Col sm={6}>
          <span>{label}</span>
        </Col>
        <Col sm={6} className={"text-right"}>
          <input
            className={"my-md-0"}
            ref={valueRef}
            value={value}
            onChange={(event) => {
              handleValueChange(event.target.value);
            }}
            onBlur={handleValueBlur}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Slider
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleValueChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <span>
            {symbol} {min}
          </span>
        </Col>
        <Col className="text-right">
          <span>
            {symbol} {max}
          </span>
        </Col>
      </Row>
    </div>
  );
}

RangeSelector.defaultProps = {
  symbol: "",
  step: 1,
};
