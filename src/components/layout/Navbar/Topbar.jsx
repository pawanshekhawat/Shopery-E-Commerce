import Styles from "./Navbar.module.css";

const Topbar = () => {
  return (
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
            </select>
          </div>
          <div className={Styles.curr}>
            <select name="" id="">
              <option value="">USD</option>
              <option value="">Eur</option>
              <option value="">INR</option>
            </select>
          </div>

          <img src="src/assets/Images/icons/Devider.png" alt="" />

          <div className={Styles.sign}>
            <p>Sign in / Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
