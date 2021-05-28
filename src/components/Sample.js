import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../redux/actions/actions";

export default function Sample() {
  const items = useSelector((state) => state.allItems.list);
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addItems({ id: 3, name: "abc" }));
  };
  console.log(items);
  return (
    <div>
      <h1>Sample component</h1>
      <button onClick={addItem}>Add New Item</button>
    </div>
  );
}
