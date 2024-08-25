import '../App.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div id='home-heads'>
                <h1 id="home-head">Tools Project</h1>
                <h2 id="home-head2">This is a personal project aiming to automate basic calculations in various subjects.</h2>
                <h3 id="home-head3">The current resources available are: </h3>
            </div>
            <Link to={"/number-systems"}>
                <button className="home-buttons">Number Systems Converter</button>
            </Link>
        </>
    )
}