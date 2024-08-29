import '../App.css';

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
    
	const startConversion = () => {
		// Code goes here
	}

  return(
    <>
			 <form onSubmit={startConversion} noValidate>
        <h1 className="title">Statistics Calculator</h1>
        <input
          type="text"
          placeholder="Type your numbers here, no commas"
          id="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button type="submit">Calculate</button>
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