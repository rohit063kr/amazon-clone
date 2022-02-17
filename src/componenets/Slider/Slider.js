import styles from "./Slider.module.scss";

const Slider = function () {
  return (
    <div className={styles["slider"]}>
      <div className={styles["slider__screen"]}>
        <img
          className={styles["slider__img"]}
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="amz img"
        />
      </div>
      <div
        className={`${styles["slider__navigator"]} ${styles["slider__navigator--left"]}`}
      >
        <ion-icon name="chevron-back-outline" />
      </div>
      <div
        className={`${styles["slider__navigator"]} ${styles["slider__navigator--right"]}`}
      >
        <ion-icon name="chevron-forward-outline" />
      </div>
    </div>
  );
};

export default Slider;
