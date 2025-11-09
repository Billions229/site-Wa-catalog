import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "@/components/Footer"
import HomePage from "./pages/HomePage"
import CategoriesPage from "./pages/CategoriesPage"
import CategoryDetailPage from "./pages/CategoryDetailPage"
import CategoryProductsPage from "./pages/CategoryProductsPage"
import HowItWorksPage from "./pages/HowItWorksPage"
import BecomeVendorPage from "./pages/BecomeVendorPage"
import ReviewsPage from "./pages/ReviewsPage"
import SubmitReviewPage from "./pages/SubmitReviewPage"
import VendorReviewLinkPage from "./pages/VendorReviewLinkPage"
import ContactPage from "./pages/ContactPage"
import MentionsLegalesPage from "./pages/MentionsLegalesPage"
import CGUPage from "./pages/CGUPage"
import ConfidentialitePage from "./pages/ConfidentialitePage"
import CookiesPage from "./pages/CookiesPage"
import BlogPage from "./pages/BlogPage"
import BlogDetailPage from "./pages/BlogDetailPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryDetailPage />} />
          <Route path="/categories/:slug/produits" element={<CategoryProductsPage />} />
          <Route path="/comment-ca-marche" element={<HowItWorksPage />} />
          <Route path="/devenir-vendeur" element={<BecomeVendorPage />} />
          <Route path="/avis-client" element={<ReviewsPage />} />
          <Route path="/soumissions-avis" element={<SubmitReviewPage />} />
          <Route path="/vendeur/lien-avis" element={<VendorReviewLinkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/cgu" element={<CGUPage />} />
          <Route path="/confidentialite" element={<ConfidentialitePage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
