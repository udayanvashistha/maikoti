import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import PlanYourVisit from "./components/planvisit/PlanYourVisit";
import GalleryPage from "./components/gallery/GalleryPage";
import ContactForm from "./components/contactform";
import BlogPostPage from "./components/blogs/BlogPostPage";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<PlanYourVisit />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
