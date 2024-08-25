import '../App.css'
import { useState, useEffect } from 'react';

export default function NumberSystems() {
    const [userInput, setUserInput] = useState('');
    const [checkBinary, setCheckBinary] = useState(false);
    const [checkDecimal, setCheckDecimal] = useState(false);
    const [checkHex, setCheckHex] = useState(false);
    const [output1, setOutput1] = useState('Output 1 title');
    const [output2, setOutput2] = useState('Output 2 title');
    const [output1Val, setOutput1Val] = useState('');
    const [output2Val, setOutput2Val] = useState('');
    
    var calc = document.getElementById('calculate');
    useEffect(() => {
            if (checkBinary && !checkDecimal && !checkHex) {
                calc.addEventListener('click', () => {
                    setOutput1('Decimal');
                    setOutput2('Hexadecimal');
                    setOutput1Val(parseInt(userInput, 2));
                    setOutput2Val(parseInt(userInput, 2).toString(16));
                });
            } else if (checkDecimal && !checkBinary && !checkHex) {
                calc.addEventListener('click', () => {
                    setOutput1('Binary');
                    setOutput2('Hexadecimal');
                    setOutput1Val(parseInt(userInput).toString(2));
                    setOutput2Val(parseInt(userInput).toString(16));
                });
            } else if (checkHex && !checkBinary && !checkDecimal) {
                calc.addEventListener('click', () => {
                    setOutput1('Binary');
                    setOutput2('Decimal');
                    setOutput1Val(parseInt(userInput, 16).toString(2));
                    setOutput2Val(parseInt(userInput, 16));
                });
            } else if (!checkBinary && !checkDecimal && !checkHex) {
                setOutput1('');
                setOutput2('');
                setOutput1Val('');
                setOutput2Val('');
            } else {
                //document.getElementById('calculate').onclick = () => {
                setOutput1('Select only one input type');
                setOutput2('Select only one input type');
            } 
    } , [checkBinary, checkDecimal, checkHex]); 

    return (
        <>
            <h1 id="num-sys-head">Number Systems Converter</h1>
            <h3>Input:</h3>
            <input
                type="text"
                placeholder='Type your number here'
                id="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
            />
            <h4>Select your input type:</h4>
            <div id="checks">
                <input
                    type="checkbox"
                    id="binary"
                    checked={checkBinary}
                    onChange={(event) => setCheckBinary(event.target.checked)}
                />
                <label htmlFor="binary">Binary</label>
                <input
                    type="checkbox"
                    id="decimal"
                    checked={checkDecimal}
                    onChange={(event) => setCheckDecimal(event.target.checked)}
                />
                <label htmlFor="decimal">Decimal</label>
                <input
                    type="checkbox"
                    id="hex"
                    checked={checkHex}
                    onChange={(event) => setCheckHex(event.target.checked)}
                />
                <label htmlFor="hex">Hexadecimal</label>
            </div>

            <button id='calculate'>Calculate</button>

            <h3 id='output1'>{output1}</h3>
            <p>{output1Val}</p>
            <h3 id="output2">{output2}</h3>
            <p>{output2Val}</p>
        </>
    );
}