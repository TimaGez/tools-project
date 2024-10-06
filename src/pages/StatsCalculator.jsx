import '../App.css';
import React, { useState } from 'react';
import { mean, median, std, min, max, ceil, floor } from 'mathjs';
import { Link } from 'react-router-dom';

export default function StatsCalculator() {

  const [userInput, setUserInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const [meanValue, setMeanValue] = useState("Mean: ");
  const [medianValue, setMedianValue] = useState("Median: ");
  const [standardDevValue, setStandardDevValue] = useState("Standard Deviation: ");
  const [minValue, setMinValue] = useState("Min: ");
  const [maxValue, setMaxValue] = useState("Max: ");
  const [rangeValue, setRangeValue] = useState("Range: ");
  const [q1Value, setQ1Value] = useState("Q1: ");
  const [q3Value, setQ3Value] = useState("Q3: ");
  const [iqrValue, setIqrValue] = useState("IQR: ");

	const startConversion = (event) => {
    event.preventDefault();
    const nums = userInput.trim().split(/\s+/).map(Number);

    if (nums.some(isNaN) || nums.length < 2) {
      setInvalidInput(true);
      return;
    }

    setInvalidInput(false);

    const meanValue = mean(nums);
    const medianValue = median(nums);
    const standardDevValue = std(nums);
    const minValue = min(nums);
    const maxValue = max(nums);
    const rangeValue = maxValue - minValue;

    setMeanValue(`Mean: ${meanValue}`);
    setMedianValue(`Median: ${medianValue}`);
    setStandardDevValue(`Standard Deviation: ${standardDevValue}`);
    setMinValue(`Min: ${minValue}`);
    setMaxValue(`Max: ${maxValue}`);
    setRangeValue(`Range: ${rangeValue}`);

    if (nums.length % 2 == 0) {
      const sortedNums = nums.sort((a, b) => a - b);
      const half=nums.length/2;
      const firstHalf = sortedNums.slice(0, half);
      const secondHalf = sortedNums.slice(half);
      
      const q1 = median(firstHalf);
      const q3 = median(secondHalf);
      const iqr = q3 - q1;
      setQ1Value(`Q1: ${q1}`);
      setQ3Value(`Q3: ${q3}`);
      setIqrValue(`IQR: ${iqr}`);
    } else {
      const sortedNums = nums.sort((a, b) => a - b);
      const firstHalf = sortedNums.slice(0, ceil(sortedNums.length / 2) - 1);
      const secondHalf = sortedNums.slice(floor(sortedNums.length / 2) + 1);

      const q1 = median(firstHalf);
      const q3 = median(secondHalf);
      const iqr = q3 - q1;
      setQ1Value(`Q1: ${q1}`);
      setQ3Value(`Q3: ${q3}`);
      setIqrValue(`IQR: ${iqr}`);
    }
	}

  return(
    <>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
			 <form onSubmit={startConversion} noValidate>
          <h1 className="title">Statistics Calculator</h1>
            <input
              type="text"
              placeholder="Type your numbers here, no commas"
              id="text1"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
            <br />
            <button type="submit" id='calc'>Calculate</button>
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
            <h3 className="titles">{meanValue}</h3>
            <h3 className="titles">{medianValue}</h3>
            <h3 className="titles">{standardDevValue}</h3>
            <h3 className="titles">{minValue}</h3>
            <h3 className="titles">{maxValue}</h3>
            <h3 className="titles">{rangeValue}</h3>
            <h3 className="titles">{q1Value}</h3>
            <h3 className="titles">{q3Value}</h3>
            <h3 className="titles">{iqrValue}</h3>
          </div>
        </div>
      )}
    </>
  )
}