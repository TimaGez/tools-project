import { HashRouter as Router, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NumberSystems from "./pages/NumberSystems";
import StatsCalculator from "./pages/StatsCalculator";
import EquationBalancer from "./pages/EquationBalancer";

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
        <Route exact path="/equation-balancer" element={<EquationBalancer/>} />
      </Routes>
    </Router>
  )
}