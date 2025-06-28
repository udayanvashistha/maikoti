import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import PlanYourVisit from "./components/planvisit/PlanYourVisit";
import GalleryPage from "./components/gallery/GalleryPage";
import ContactForm from "./components/contactform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/maikoti" element={<Home />} />
        <Route path="/plan" element={<PlanYourVisit />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
