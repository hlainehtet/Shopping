import React from "react";
import "./List.css";
function List({ products }) {
  return (
    <ol>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ol>
  );
}
export default List;
