import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict/BoilingVerdict";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TempInput = (props) => {
  const [temp, setTemp] = useState("");

  const handleChange = (e) => {
    setTemp(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temp in {scaleNames[props.scale]}</legend>
      <input value={temp} onChange={handleChange}></input>
      <BoilingVerdict
        celsius={Number(temp)}
        fahrenheit={Number(temp) * (9 / 5) + 32}
      />
    </fieldset>
  );
};

export default TempInput;
