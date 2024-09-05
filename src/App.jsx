import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import NumberSystems from "./pages/NumberSystems";
import TorqueMeeting from "./pages/TorqueMeeting";

export default function App() {
  return <AppContent />;
}

function AppContent() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/number-systems" element={<NumberSystems />} />
        <Route
          exact
          path="/is-there-a-torque-meeting-today"
          element={<TorqueMeeting />}
        />
      </Routes>
    </Router>
  );
}
