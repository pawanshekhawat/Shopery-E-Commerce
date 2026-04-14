import Filters from "../../components/Filters/Filters";
import AllVegetables from "../AllVegetables/AllVegetables";

function ShopPage() {
  return (
    <>
    <div className="flex">
      <Filters />
      <AllVegetables />
      </div>
    </>
  )
}

export default ShopPage;

