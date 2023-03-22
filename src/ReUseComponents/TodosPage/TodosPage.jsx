import React from "react";
import add from "./add.png";
import "./TodosPage.css";
export default function TodosPage({ dispatch }) {
  const OpenAddTodoPopUp = () => {
    dispatch({ type: "CHANGE_POPUP", payload: true });
  };
  return (
    <div>
      <button className="AddTodo" onClick={OpenAddTodoPopUp}>
        <img src={add}></img>
      </button>
    </div>
  );
}
