import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import PopularCategories from "../components/PopularCategories"
import CTABuyer from "../components/CTABuyer"
import SecuritySection from "../components/SecuritySection"
import Stats from "../components/Stats"
import BecomeVendor from "../components/BecomeVendor"
import CTAVendor from "../components/CTAVendor"
import Pricing from "../components/Pricing"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PopularCategories />
      <CTABuyer />
      <SecuritySection />
      <Stats />
      <BecomeVendor />
      <CTAVendor />
      <Pricing />
    </>
  )
}
