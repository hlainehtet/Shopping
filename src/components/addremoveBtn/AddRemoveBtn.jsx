import React from "react";
export function AddRemoveBtn({
  isAdded,
  addItem,
  product,
  removeItem,
  setIsAdded,
}) {
  return (
    <button
      className={isAdded ? "add-item-btn" : "remove-item-btn"}
      onClick={() => {
        isAdded ? addItem(product) : removeItem(product);
        setIsAdded(!isAdded);
      }}
    >
      {isAdded ? "ADD " : "CANCLE"}
    </button>
  );
}
