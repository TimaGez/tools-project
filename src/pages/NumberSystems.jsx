import "../App.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function NumberSystems() {
  const [userInput, setUserInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const inputTypeRef = useRef("");

  const [firstConversionTitle, setFirstConversionTitle] = useState("");
  const [secondConversionTitle, setSecondConversionTitle] = useState("");
  const [firstConversionVal, setFirstConversionVal] = useState("");
  const [secondConversionVal, setSecondConversionVal] = useState("");

  const startConversion = () => {
    switch (inputTypeRef.current.value) {
      case "1": // Decimal
        if (isNaN(userInput) || userInput.includes(".") || userInput === "") {
          setInvalidInput(true);
          break;
        }
        setInvalidInput(false);

        // Set titles
        setFirstConversionTitle("Binary");
        setSecondConversionTitle("Hexadecimal");

        // Set Values
        setFirstConversionVal(parseInt(userInput).toString(2));
        setSecondConversionVal(parseInt(userInput).toString(16).toUpperCase());
        break;
      case "2": // Binary
        { const regex = /^[01]+$/;
        if (!regex.test(userInput)) {
          setInvalidInput(true);
          break;
        }
        setInvalidInput(false);

        // Set titles
        setFirstConversionTitle("Decimal");
        setSecondConversionTitle("Hexadecimal");

        // Set Values
        setFirstConversionVal(BigInt(`0b${userInput}`).toString());
        setSecondConversionVal(
          BigInt(`0b${userInput}`).toString(16).toUpperCase()
        );
        break; }
      case "3": // Hex
        { const hex_regex = /^[0-9a-fA-F]+$/;
        if (!hex_regex.test(userInput)) {
          setInvalidInput(true);
          break;
        }
        setInvalidInput(false);

        // Set titles
        setFirstConversionTitle("Binary");
        setSecondConversionTitle("Decimal");

        // Set Values
        setFirstConversionVal(BigInt(`0x${userInput}`).toString(2));
        setSecondConversionVal(BigInt(`0x${userInput}`).toString(10));
        break; }
    }
  };

  return (
    <>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
      <form onSubmit={startConversion} noValidate>
        <h1 className="title">Number Systems Converter</h1>
        <input
          type="text"
          placeholder="Type your number here"
          id="text1"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <div id='input' className="input-group mb-3 form">
          <span className="input-group-text">Input Type</span>
          <select
            className="form-select"
            aria-label="input type selector"
            ref={inputTypeRef}
            required
          >
            <option selected>Select an Input Type</option>
            <option value="1">Decimal</option>
            <option value="2">Binary</option>
            <option value="3">Hexadecimal</option>
          </select>
        </div>
        <button type="submit" id="calc">Calculate</button>
      </form>

      {invalidInput ? (
        <h2>Invalid Input</h2>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div style={{ marginRight: "5px" }}>
            <h3 className="titles">{firstConversionTitle}</h3>
            <p className="values">{firstConversionVal}</p>
          </div>

          <div>
            <h3 className="titles">{secondConversionTitle}</h3>
            <p className="values">{secondConversionVal}</p>
          </div>
        </div>
      )}
    </>
  );
}
