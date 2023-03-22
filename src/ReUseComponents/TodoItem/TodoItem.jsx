import React from "react";
import "./TodoItem.css";
import deletes from "./delete.png";
import pen from "./pen.png";
import clock from "./clock.png";
export default function TodoItem({
  item,
  DeleteTodo,
  AddToDoneTodos,
  ChangeActive,
  ChangeTodoTitle,
  onDragStart,
  onDrop,
  onDragLeave,
  onDrugOver,
}) {
  return (
    <div
      className={item.Completed ? "TodoItem Completed" : "TodoItem"}
      draggable={true}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragOver={onDrugOver}
    >
      <div className={item.Completed ? "DateBox Completed" : "DateBox"}>
        <img
          src={clock}
          className={item.Completed ? "Clock Completed" : "Clock"}
        ></img>
        <p className={item.Completed ? "Time Completed" : "Time"}>
          {item.Date}
        </p>
      </div>
      <div className={"CheckBoxAndTitle"}>
        <div
          className={
            item.Completed ? "InpChangeAndDel Completed" : "InpChangeAndDel"
          }
        >
          <input
            type={"checkbox"}
            className="DoneOrNot"
            onChange={AddToDoneTodos || ChangeActive}
            checked={item.Completed ? true : false}
          ></input>
          <p className={"TodoTitle"}>{item?.title}</p>
        </div>
        <div className="TodoButtons">
          <button className="DeleteTodo" onClick={() => DeleteTodo(item)}>
            <img src={deletes}></img>
          </button>
          <button className="EditTodo" onClick={ChangeTodoTitle}>
            <img src={pen}></img>
          </button>
        </div>
      </div>
    </div>
  );
}
