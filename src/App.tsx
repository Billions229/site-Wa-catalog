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
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
