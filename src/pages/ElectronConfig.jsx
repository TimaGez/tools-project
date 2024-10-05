import '../App.css'
import React , { useState } from 'react'

export default function ElectronConfig() {

  const [userInput, setUserInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  // const [name, setName] = useState("");
  // const [symbol, setSymbol] = useState("");
  const [atomicNumber, setAtomicNumber] = useState("");
  // const [atomicMass, setAtomicMass] = useState("");
  const [configuration, setConfiguration] = useState("");
  const [nobleGasConfiguration, setNobleGasConfiguration] = useState("");

  const startConversion = (event) => {
    event.preventDefault();
    const input = Number(userInput.trim());

    if (isNaN(input) || input < 1 || input > 118 || input%1 !== 0) {
      setInvalidInput(true);
        return;
    }

    setInvalidInput(false)

    //------------------------------------

    setAtomicNumber(input);

    const nobleGases = [
      'He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn'
    ]

    if (input <= 2) {
      setConfiguration('1s' + input);
      setNobleGasConfiguration('1s' + input);
    } else if (input <= 4) {
      setConfiguration(`1s2 2s${input - 2}`);
      setNobleGasConfiguration(`[${nobleGases[0]}] 2s${input - 2}`);
    } else if (input <= 10) {
      setConfiguration(`1s2 2s2 2p${input - 4}`);
      setNobleGasConfiguration(`[${nobleGases[0]}] 2s2 2p${input - 4}`);
    } else if (input <= 12) {
      setConfiguration(`1s2 2s2 2p6 3s${input - 10}`);
      setNobleGasConfiguration(`[${nobleGases[1]}] 3s${input - 10}`);
    } else if (input <= 18) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p${input - 12}`);
      setNobleGasConfiguration(`[${nobleGases[1]}] 3s2 3p${input - 12}`);
    } else if (input <= 20) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s${input - 18}`);
      setNobleGasConfiguration(`[${nobleGases[2]}] 4s${input - 18}`);
    } else if (input <= 30) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d${input - 20}`);
      setNobleGasConfiguration(`[${nobleGases[2]}] 4s2 3d${input - 20}`);
    } else if (input <= 36) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p${input - 30}`);
      setNobleGasConfiguration(`[${nobleGases[2]}] 4s2 3d10 4p${input - 30}`);
    } else if (input <= 38) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s${input - 36}`);
      setNobleGasConfiguration(`[${nobleGases[3]}] 5s${input - 36}`);
    } else if (input <= 48) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d${input - 38}`);
      setNobleGasConfiguration(`[${nobleGases[3]}] 5s2 4d${input - 38}`);
    } else if (input <= 54) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p${input - 48}`);
      setNobleGasConfiguration(`[${nobleGases[3]}] 5s2 4d10 5p${input - 48}`);
    } else if (input <= 56) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s${input - 54}`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s${input - 54}`);
    } else if (input == 57) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s2 5d1`);
    } else if (input <= 71) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 
        4f${input - 57}`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s2 5d1 4f${input - 57}`);             
    } else if (input <= 80) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 
        4f14 5d${input - 70}`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s2 4f14 5d${input - 70}`);
    } else if (input <= 86) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 
        5d10 6p${input - 80}`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s2 4f14 5d10 6p${input - 80}`);
    } else if (input <= 88) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 
        6p6 7s${input - 86}`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s${input - 86}`);
    } else if (input == 89) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 
        6p6 7s2 6d1`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s2 6d1`);
    } else if (input <= 103) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 
        6p6 7s2 6d1 5f${input - 89}`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s2 6d1 5f${input - 89}`);
    } else if (input <= 112) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 
        6p6 7s2 5f14 6d${input - 102}`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s2 6d1 5f14 6d${input - 102}`);
    } else {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10
        6p6 7s2 5f14 6d10 7p${input - 112}`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s2 5f14 6d10 7p${input - 112}`);
    }
  }

    return (
        <>
          <form onSubmit={startConversion} noValidate>
            <h1 className="title">Electron Configuration</h1>
            <input
              type="text"
              placeholder="Type the atomic number"
              id="text1"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
            <br />
            <button type="submit" id='ok'>OK</button>
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
              <div>
                {/* <h3 className="titles">{name}</h3> */}
                {/* <h3 className="titles">{symbol}</h3> */}
                <h3 className="titles">Element #{atomicNumber}</h3>
                {/* <h3 className="titles">{atomicMass}</h3> */}
                <h3 className="titles">Default Configuration: {configuration}</h3>
                <h3 className="titles">Noble Gas Configuration: {nobleGasConfiguration}</h3>
              </div>
            </div>
          )}
        </>
    )
}