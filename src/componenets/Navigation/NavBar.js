import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

const NavBar = function () {
  return (
    <div className={styles["navigation-nav-bar"]}>
      <ul className={styles["navigation-nav-bar__list"]}>
        <li
          className={`${styles["navigation-nav-bar__list-item"]} ${styles["navigation-nav-bar__logo-item"]}`}
        >
          <Link to="">
            <img
              className={styles["navigation-nav-bar__logo"]}
              alt="img"
              src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
            />
          </Link>
        </li>
        <li className={styles["navigation-nav-bar__list-item"]}>
          <Link to="">
            <div className={styles["navigation-nav-bar__list-item-box"]}>
              <span className={styles["navigation-nav-bar__icon"]}>
                <ion-icon name="location-outline" />
              </span>
              <span>
                Deliver to{" "}
                <span className={styles["navigation-nav-bar__bold-link"]}>
                  India
                </span>
              </span>
            </div>
          </Link>
        </li>
        <li
          className={`${styles["navigation-nav-bar__list-item"]} ${styles["navigation-nav-bar__search-item"]}`}
        >
          <form className={styles["navigation-nav-bar__search-form"]}>
            <input className={styles["navigation-nav-bar__search-input"]} />
            <button
              type="submit"
              className={styles["navigation-nav-bar__search-btn"]}
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </form>
        </li>
        <li className={styles["navigation-nav-bar__list-item"]}>
          <Link to="">
            Hello, sign in{" "}
            <span className={styles["navigation-nav-bar__bold-link"]}>
              Account & List
            </span>
          </Link>
        </li>
        <li className={styles["navigation-nav-bar__list-item"]}>
          <Link to="">
            Return{" "}
            <span className={styles["navigation-nav-bar__bold-link"]}>
              & Order
            </span>
          </Link>
        </li>
        <li className={styles["navigation-nav-bar__list-item"]}>
          <Link to="">
            <span className={styles["navigation-nav-bar__icon"]}>
              <ion-icon name="cart-outline" />
            </span>
            <span className={styles["navigation-nav-bar__nav-beltbold-link"]}>
              {" "}
              Cart
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
