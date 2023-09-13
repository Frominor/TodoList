import React from "react";
import "./TodoItem.css";
import deletes from "./delete.png";
import pen from "./pen.png";
import clock from "./clock.png";
import { useDispatch, useSelector } from "react-redux";
export default function TodoItem({
  item,
  AddToDoneTodos,
  ChangeActive,
  ChangeTodoTitle,
  onDragStart,
  onDrop,
  onDragLeave,
  onDrugOver,
}) {
  const dispatch = useDispatch();
  const State = useSelector((state) => state.TodoReducer);
  const DeleteTodo = (item) => {
    if (State.isActive) {
      dispatch({ type: "FILTER_TODO", payload: item.title });
    } else {
      dispatch({ type: "FILTER_DONE_TODOS", payload: item.title });

      dispatch({ type: "FILTER_TODO", payload: item.title });
    }
  };
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
        />
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
            checked={item.Completed}
          ></input>
          <p className={"TodoTitle"}>{item.title}</p>
        </div>
        <div className="TodoButtons">
          <button
            className="DeleteTodo"
            style={{ cursor: "pointer" }}
            onClick={() => DeleteTodo(item)}
          >
            <img src={deletes}></img>
          </button>
          <button
            className="EditTodo"
            style={{ cursor: "pointer" }}
            onClick={ChangeTodoTitle}
          >
            <img src={pen}></img>
          </button>
        </div>
      </div>
    </div>
  );
}
