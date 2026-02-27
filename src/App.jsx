import TeamCard from "./components/TeamCard/TeamCard"
import ProductCard from "./components/ProductCard/ProductCard"
import TestimonialCard from "./components/TestimonialCard/TestimonialCard"
import Navbar from "./components/layout/Navbar/Navbar"
import Button from "./components/common/Button/Button"
import FeaturedServices from "./components/pages/Home/sections/FeaturedServices"
import DealOfTheMonth from "./components/pages/Home/sections/DealOfTheMonth"
import AboutSection from "./components/pages/Home/sections/AboutSection"
import Banner from "./components/pages/Home/sections/Banner"
import ProductList from "./components/ProductList/ProductList"
import CategoryCard from "./components/CategoryCard/CategoryCard"
import HeroSection from "./components/pages/Home/Sections/HeroSection"
import SaleCard from "./components/SaleCard/SaleCard"

function App() {

  return (
    <>
    <Banner/>
      <AboutSection />
      <DealOfTheMonth />
      <FeaturedServices />
      <Button icon={<img src="src/assets/images/icons/rightArrow.png" />}>
        Shop Now
      </Button>
      <Navbar />
      <TeamCard />
      <ProductCard />
      <TestimonialCard />
      <ProductList/>
      <CategoryCard/>
      <HeroSection/>
      <SaleCard/>
    </>
  )
}

export default App
