import { HashRouter as Router, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NumberSystems from "./pages/NumberSystems";
import StatsCalculator from "./pages/StatsCalculator";

export default function App() {
  return (
      <AppContent />
  )
}

function AppContent() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/number-systems" element={<NumberSystems />} />
        <Route exact path="/stats-calculator" element={<StatsCalculator/>} />
      </Routes>
    </Router>
  )
}