import "../StylSheet/BmiCalculator.css";
import { useState } from "react";
import pngtree from "../assets/pngtree-tiny-women-near-obese-chart-scales-isolated-flat-vector-illustration-picture-image_8709224.png";
export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  function handleClick() {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMsg("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMsg("Please enter valid number values for height and weight.");
    }
  }
  function handleClear() {
    setWeight("");
    setHeight("");
    setBmi(null);
    setBmiStatus("");
  }

  return (
    <div>
      <div className="bmi-container">
        <div className="box">
          <div className="img-c">
            <img src={pngtree} alt="img" />
          </div>
        </div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMsg && <p className="error">{errorMsg}</p>}
          <div className="shape-input-container">
            <div className="input-container">
              <label htmlFor="height">Height (cm):</label>
              <input
                onChange={(e) => setHeight(e.target.value)}
                type="text"
                id="height"
                value={height}
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="weight">weight (kg):</label>
              <input
                onChange={(e) => setWeight(e.target.value)}
                type="text"
                id="weight"
                value={weight}
              ></input>
            </div>
            <button onClick={handleClick}>Calculate BMI</button>
            <button onClick={handleClear}>Clear</button>
          </div>
          {bmi !== null && (
            <div className="result">
              <p>your BMI is:{bmi}</p>
              <p>status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
