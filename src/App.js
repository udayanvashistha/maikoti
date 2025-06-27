import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import PlanYourVisit from "./components/planvisit/PlanYourVisit";
import GalleryPage from "./components/gallery/GalleryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/maikoti" element={<Home />} />
        <Route path="/plan" element={<PlanYourVisit />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
