import ProductCategoryBox from "./ProductCategoryBox";
import styles from "./ProductSection.module.scss";

import data from "../../data";

const ProductSection = function () {
  const products = data.filter((el, i) => i < 8);
  return (
    <section className={styles["section-products"]}>
      <div className={styles["products__intro"]}>
        <p className={styles["products__intro-text"]}>
          You are on amazon.com. You can also shop on Amazon India for millions
          of products with fast local delivery.
        </p>
      </div>
      <div className={styles["products__category-container"]}>
        {products.map((product) => (
          <ProductCategoryBox data={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
