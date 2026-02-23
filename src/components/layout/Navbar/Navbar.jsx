import Styles from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import Topbar from "./Topbar";

const Navbar = () => {
  console.log(Styles);
  return (
    <>
      <Topbar />
      <hr />
      <SearchBar />

      <div className={Styles.navigation}>
          <div class={Styles.navbar}>
            <div className={Styles.list}>
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Blog</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </div>

            <div class={Styles.contactNo}>
              <img src="src/assets/Images/icons/call.png" alt="" />
              <h5>(219) 555-0114</h5>
            </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
