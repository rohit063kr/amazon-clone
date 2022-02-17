import styles from "./ProductCategoryBox.module.scss";

const ProductCategoryBox = function (props) {
  console.log(props);
  return (
    <div className={styles["products__category-box"]}>
      <h2 className={styles["products__category-heading"]}>
        {props.data.categories[0].name}
      </h2>
      <img
        className={styles["products__category-product-img"]}
        src={props.data.image}
        alt={props.data.title}
      />
      <a href="" className={styles["products__category-link"]}>
        Show me
      </a>
    </div>
  );
};

export default ProductCategoryBox;
