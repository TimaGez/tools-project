import '../App.css'
import React , { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ElectronConfig() {

  const [userInput, setUserInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [atomicNumber, setAtomicNumber] = useState("");
  // const [atomicMass, setAtomicMass] = useState("");
  const [configuration, setConfiguration] = useState("");
  const [nobleGasConfiguration, setNobleGasConfiguration] = useState("");

  const startConversion = (event) => {
    event.preventDefault();

    const elements = [
        'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne',
        'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca',
        'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
        'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr',
        'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn',
        'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd',
        'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb',
        'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg',
        'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th',
        'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm',
        'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds',
        'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'
    ]

    const elementNames = [
        'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 
        'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 
        'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 
        'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 
        'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc',
        'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 
        'Rubidium', 'Strontium', 'Yttrium', 'Zirconium',
        'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 
        'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin',
        'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium', 
        'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium',
        'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 
        'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium',
        'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 
        'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury',
        'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 
        'Francium', 'Radium', 'Actinium', 'Thorium',
        'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 
        'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium',
        'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 
        'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium',
        'Roentgenium', 'Copernicium', 'Nihonium', 'Flerovium', 'Moscovium', 
        'Livermorium', 'Tennessine', 'Oganesson'
    ]

    const input1 = Number(userInput);    
    if (!isNaN(input1)) {

        const input = Number(userInput);
        if (input < 1 || input > 118 || input%1 !== 0) {
            setInvalidInput(true);
              return;
        } setInvalidInput(false);

        var atomicNum = input;
    } else {

        const input = userInput;
        const nameIndex = elementNames.map(
            name => name.toLowerCase()).indexOf(input.toLowerCase());
        const elementIndex = elements.map(
            element => element.toLowerCase()).indexOf(input.toLowerCase());

        if (nameIndex == -1 
            && elementIndex == -1) {
            setInvalidInput(true);
            return; 
        } setInvalidInput(false);

        if (nameIndex != -1) {
            var atomicNum = nameIndex +1;
            setAtomicNumber(elementIndex);
        } else if (elementIndex != -1) {
            var atomicNum = elementIndex +1;
        }
    }

    //------------------------------------

    setAtomicNumber(atomicNum);

    const nobleGases = [
      'He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn'
    ]

    setSymbol(elements[atomicNum - 1]);

    setName(elementNames[atomicNum - 1]);

    if (atomicNum <= 2) {
      setConfiguration('1s' + atomicNum);
      setNobleGasConfiguration('1s' + atomicNum);
    } else if (atomicNum <= 4) {
      setConfiguration(`1s2 2s${atomicNum - 2}`);
      setNobleGasConfiguration(`[${nobleGases[0]}] 2s${atomicNum - 2}`);
    } else if (atomicNum <= 10) {
      setConfiguration(`1s2 2s2 2p${atomicNum - 4}`);
      setNobleGasConfiguration(`[${nobleGases[0]}] 2s2 2p${atomicNum - 4}`);
    } else if (atomicNum <= 12) {
      setConfiguration(`1s2 2s2 2p6 3s${atomicNum - 10}`);
      setNobleGasConfiguration(`[${nobleGases[1]}] 3s${atomicNum - 10}`);
    } else if (atomicNum <= 18) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p${atomicNum - 12}`);
      setNobleGasConfiguration(`[${nobleGases[1]}] 3s2 3p${atomicNum - 12}`);
    } else if (atomicNum <= 20) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s${atomicNum - 18}`);
      setNobleGasConfiguration(`[${nobleGases[2]}] 4s${atomicNum - 18}`);
    } else if (atomicNum <= 30) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d${atomicNum - 20}`);
      setNobleGasConfiguration(`[${nobleGases[2]}] 4s2 3d${atomicNum - 20}`);
    } else if (atomicNum <= 36) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p${atomicNum - 30}`);
      setNobleGasConfiguration(`[${nobleGases[2]}] 4s2 3d10 4p${atomicNum - 30}`);
    } else if (atomicNum <= 38) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s${atomicNum - 36}`);
      setNobleGasConfiguration(`[${nobleGases[3]}] 5s${atomicNum - 36}`);
    } else if (atomicNum <= 48) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d${atomicNum - 38}`);
      setNobleGasConfiguration(`[${nobleGases[3]}] 5s2 4d${atomicNum - 38}`);
    } else if (atomicNum <= 54) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p${atomicNum - 48}`);
      setNobleGasConfiguration(`[${nobleGases[3]}] 5s2 4d10 5p${atomicNum - 48}`);
    } else if (atomicNum <= 56) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s${atomicNum - 54}`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s${atomicNum - 54}`);
    } else if (atomicNum == 57) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s2 5d1`);
    } else if (atomicNum <= 71) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 
        4f${atomicNum - 57}`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s2 5d1 4f${atomicNum - 57}`);             
    } else if (atomicNum <= 80) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 
        4f14 5d${atomicNum - 70}`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s2 4f14 5d${atomicNum - 70}`);
    } else if (atomicNum <= 86) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 
        5d10 6p${atomicNum - 80}`);
      setNobleGasConfiguration(`[${nobleGases[4]}] 6s2 4f14 5d10 6p${atomicNum - 80}`);
    } else if (atomicNum <= 88) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 
        6p6 7s${atomicNum - 86}`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s${atomicNum - 86}`);
    } else if (atomicNum == 89) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 
        6p6 7s2 6d1`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s2 6d1`);
    } else if (atomicNum <= 103) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 
        6p6 7s2 6d1 5f${atomicNum - 89}`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s2 6d1 5f${atomicNum - 89}`);
    } else if (atomicNum <= 112) {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 
        6p6 7s2 5f14 6d${atomicNum - 102}`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s2 6d1 5f14 6d${atomicNum - 102}`);
    } else {
      setConfiguration(`1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10
        6p6 7s2 5f14 6d10 7p${atomicNum - 112}`);
      setNobleGasConfiguration(`[${nobleGases[5]}] 7s2 5f14 6d10 7p${atomicNum - 112}`);
    }
  }

    return (
        <>
            <Link to="/">
                <button className='home-button'>Home</button>
            </Link>
          <form onSubmit={startConversion} noValidate>
            <h1 className="title">Electron Configuration</h1>
            <input
              type="text"
              placeholder="Type the atomic number, symbol, or name"
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
                <h3 className="titles"><b>{symbol}</b></h3>
                <h3 className="titles"><u>{name}</u></h3>
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