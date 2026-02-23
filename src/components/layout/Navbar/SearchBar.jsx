import Styles from './Navbar.module.css'

const SearchBar = () => {
  return (
    <div className={Styles.navbarSec}>
      <div className={Styles.searchBar}>
        <div className={Styles.logo}>
          <img src="src/assets/Images/logo/Group.png" alt="" />
        </div>
        <div className={Styles.search}>
          <input type="" placeholder="search" />
          <div>Search</div>
        </div>
        <div className={Styles.contactUs}>
          <div className={Styles.wishlist}>
            <img src="src/assets/Images/icons/Heart (1).png" alt="" />
          </div>

          <img
            className={Styles.divider}
            src="src/assets/Images/icons/Devider.png"
            alt=""
          />

          <div className={Styles.shoppingCart}>
            <div className={Styles.bag}>
              <img src="src/assets/Images/icons/Rectangle.png" alt="" />
            </div>
          </div>
          <div className={Styles.totalAmount}>
            <p>Shopping Cart</p>
            <h5>$57.00</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
