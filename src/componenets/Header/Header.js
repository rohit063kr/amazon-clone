import styles from "./Header.module.scss";

import Slider from "../Slider/Slider";
import Navigation from "../Navigation/Navigation";

const Header = function () {
  return (
    <div className={styles["header"]}>
      <Navigation />
      <Slider />
    </div>
  );
};

export default Header;
