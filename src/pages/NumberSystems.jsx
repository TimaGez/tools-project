import '../App.css'
import { useState, useRef } from 'react';

export default function NumberSystems() {
    const [userInput, setUserInput] = useState('');
    const [invalidInput, setInvalidInput] = useState(false);
    const inputTypeRef = useRef(0)

    const [firstConversionTitle, setFirstConversionTitle] = useState("");
    const [secondConversionTitle, setSecondConversionTitle] = useState("");
    const [firstConversionVal, setFirstConversionVal] = useState("");
    const [secondConversionVal, setSecondConversionVal] = useState("");

    const startConversion = () => {
        switch (inputTypeRef.current.value) {
            case "1": // Decimal
                if (isNaN(userInput) || userInput.includes("-") || userInput.includes(".")) {
                    setInvalidInput(true);
                    break;
                }
                setInvalidInput(false);

                // Set titles
                setFirstConversionTitle("Binary");
                setSecondConversionTitle("Hexadecimal");

                // Set Values
                setFirstConversionVal(parseInt(userInput).toString(2))
                setSecondConversionVal(parseInt(userInput).toString(16).toUpperCase());
                break;
            case "2": // Binary
                const regex = /^[01]+$/;
                if (!regex.test(userInput)) {
                    setInvalidInput(true);
                    break;
                }
                setInvalidInput(false);

                // Set titles
                setFirstConversionTitle("Decimal");
                setSecondConversionTitle("Hexadecimal");

                // Set Values
                setFirstConversionVal(parseInt(userInput, 2))
                setSecondConversionVal(parseInt(userInput, 2).toString(16).toUpperCase());
                break;
            case "3": // Hex
                const hex_regex = /^[0-9a-fA-F]+$/;
                if (!hex_regex.test(userInput)) {
                    setInvalidInput(true);
                    break;
                }
                setInvalidInput(false);
                // Set titles
                setFirstConversionTitle("Binary");
                setSecondConversionTitle("Decimal");

                // Set Values
                setFirstConversionVal(parseInt(userInput, 16).toString(2))
                setSecondConversionVal(parseInt(userInput, 16))
                break;
        }
    }

    return (
        <>
            <h1 className="title">Number Systems Converter</h1>
            <input
                type="text"
                placeholder='Type your number here'
                id="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
            />
            <div className="input-group mb-3">
                <span className="input-group-text">Input Type</span>
                <select className="form-select" aria-label="input type selector" ref={inputTypeRef}>
                    <option value="1">Decimal</option>
                    <option value="2">Binary</option>
                    <option value="3">Hexadecimal</option>
                </select>
            </div>

            <button onClick={startConversion}>Calculate</button>

            {invalidInput ? (
                <h2>Invalid Input</h2>
            ) : (
                <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                    <div style={{ marginRight: "5px" }}>
                        <h3>{firstConversionTitle}</h3>
                        <p>{firstConversionVal}</p>
                    </div>

                    <div>
                        <h3>{secondConversionTitle}</h3>
                        <p>{secondConversionVal}</p>
                    </div>
                </div>
            )}
        </>
    );
}