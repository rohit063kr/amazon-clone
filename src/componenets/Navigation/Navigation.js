import styles from "./Navigation.module.scss";

import NavBar from "./NavBar";
import NavBelt from "./NavBelt";

const Navigation = function () {
  return (
    <div className={styles["navigation"]}>
      <NavBar />
      <NavBelt />
    </div>
  );
};

export default Navigation;
