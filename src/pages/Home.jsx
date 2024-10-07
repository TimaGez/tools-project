import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div id='home-heads'>
                <img src="wrench.svg" alt="wrench" width='100' heiht='100'/>
                <h1 id="home-head">Tools Project</h1>
                <h2 id="home-head2">This is a personal project, developed by <a href="https://www.github.com/timagez">Tima Gezalov</a> and <a href="https://github.com/starlessknights">Ryan</a>, aiming to automate basic calculations in various subjects.</h2>
                <h3 id="home-head3">The current resources available are: </h3>
            </div>
            <Link to={"/number-systems"}>
                    <button className='home-buttons'>Number Systems Converter</button>
            </Link>
            <Link to={"/stats-calculator"}>
                    <button className='home-buttons'>Statistics Calculator</button>
            </Link>
            <Link to={"/is-there-a-torque-meeting-today"}>
              <button className="home-buttons">Torque Meeting?</button>
            </Link>
            <Link to="/electron-config">
                <button className='home-buttons'>Electron Configuration</button>
            </Link>
        </>
    )
}
