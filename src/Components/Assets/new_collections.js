import all_product from "./all_product";

const new_collections = all_product.filter(
  (item) => [1, 2, 3, 4, 5, 6, 7, 8].includes(item.id) // ✅ use IDs that exist in all_product.js
);

export default new_collections;
