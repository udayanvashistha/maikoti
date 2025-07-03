import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import PlanYourVisit from "./components/planvisit/PlanYourVisit";
import GalleryPage from "./components/gallery/GalleryPage";
import ContactForm from "./components/contactform";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<PlanYourVisit />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
