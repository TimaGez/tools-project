import { HashRouter as Router, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NumberSystems from "./pages/NumberSystems";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/number-systems" element={<NumberSystems />} />
      </Routes>
    </Router>
  )
}