import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ServicesPage from "./pages/Services.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import ReviewsPage from "./pages/Reviews.jsx";
import ContactPage from "./pages/Contact.jsx";
import LoginPage from "./pages/admin/Login.jsx";
import AdminPage from "./pages/admin/Dashboard.jsx";
import ProtectedRoute from "./pages/admin/ProtectedRoute.jsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => { const el = document.querySelector(hash); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 50);
    } else { window.scrollTo(0, 0); }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
