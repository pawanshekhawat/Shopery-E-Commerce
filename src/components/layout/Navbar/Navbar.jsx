import Styles from "./Navbar.module.css";

const Navbar = () => {
  console.log(Styles);
  return (
    <>
      <div className={Styles.navbarSec}>
        <div className={Styles.topBar}>
          <div className={Styles.rightTopBar}>
            <div className={Styles.map}>
              <img src="src/assets/Images/icons/Map Pin.png" alt="" />
            </div>
            <div className={Styles.address}>
              <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
          </div>
          <div className={Styles.leftTopBar}>
            <div className={Styles.lang}>
              <select name="" id="">
                <option value="">Eng</option>
                <option value="">Hindi</option>
                <option value="">French</option>
                {/* <option value="">Japenese</option> */}
              </select>
            </div>
            <div className={Styles.curr}>
              <select name="" id="">
                <option value="">USD</option>
                <option value="">Eur</option>
                <option value="">INR</option>
              </select>
            </div>

            <hr />

            <div className={Styles.sign}>
                <p>Sign in / Sign up</p>
            </div>
          </div>
        </div>

        <div className={Styles.searchBar}>
            <div className={Styles.logo}>
                <img src="src/assets/Images/logo/Group.png" alt="" />
                <h1>Ecobazar</h1>
            </div>
            <div className={Styles.search}>
                <input type="" placeholder="search" />
                <button>Search</button>
            </div>
            <div className={Styles.contactUs}>
                
            </div>

        </div>

        <div className={Styles.nevigation}></div>
      </div>
    </>
  );
};

export default Navbar;
