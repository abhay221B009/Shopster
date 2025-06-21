import all_product from "./all_product";

const data_product = all_product.filter((item) =>
  [1, 2, 3, 4].includes(item.id)
);

export default data_product;
