import { Link } from "react-router-dom";
import styles from "./NavBelt.module.scss";

const NavBelt = function () {
  return (
    <div className={styles["navigation-nav-belt"]}>
      <ul className={styles["navigation-nav-belt__list"]}>
        <li className={styles["navigation-nav-belt__list-item"]}>
          <a href="/" className={styles["navigation-nav-belt__list-menu"]}>
            <span className={styles["navigation-nav-belt__menu"]}>
              <span className={styles["navigation-nav-belt__menu-bar"]} />
              <span className={styles["navigation-nav-belt__menu-bar"]} />
              <span className={styles["navigation-nav-belt__menu-bar"]} />
            </span>{" "}
            All
          </a>
        </li>
        <li className={styles["navigation-nav-belt__list-item"]}>
          <Link to="">Today's deal</Link>
        </li>
        <li className={styles["navigation-nav-belt__list-item"]}>
          <Link to="">Customer's service</Link>
        </li>
        <li className={styles["navigation-nav-belt__list-item"]}>
          <Link to="">Registry</Link>
        </li>
        <li className={styles["navigation-nav-belt__list-item"]}>
          <Link to="">Gift card</Link>
        </li>
        <li className={styles["navigation-nav-belt__list-item"]}>
          <Link to="">Sell</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBelt;
