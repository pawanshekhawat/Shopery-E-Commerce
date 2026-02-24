import TeamCard from "./components/TeamCard/TeamCard"
import ProductCard from "./components/ProductCard/ProductCard"
import TestimonialCard from "./components/TestimonialCard/TestimonialCard"
import Navbar from "./components/layout/Navbar/Navbar"
import Button from "./components/common/Button/Button"
import FeaturedServices from "./components/pages/Home/sections/FeaturedServices"

function App() {

  return (
    <>
    <FeaturedServices/>
      <Button />
      <Navbar />
      <TeamCard />
      <ProductCard />
      <TestimonialCard />
    </>
  )
}

export default App
