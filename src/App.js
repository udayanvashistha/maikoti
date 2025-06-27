import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import PlanYourVisit from "./components/planvisit/PlanYourVisit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<PlanYourVisit />} />
      </Routes>
    </Router>
  );
}

export default App;
