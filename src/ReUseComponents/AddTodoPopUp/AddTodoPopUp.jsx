import React from "react";

import close from "./close.png";
import { useDispatch, useSelector } from "react-redux";
import "./AddTodoPopUp.css";
export default function AddTodoPopUp() {
  const State = useSelector((state) => state.TodoReducer);
  const dispatch = useDispatch();
  const [Value, SetValue] = React.useState("");
  function WriteTodoName(e) {
    SetValue(e.target.value);
  }
  function closePopUpWithEscape(e) {
    if (e.key == "Escape") {
      dispatch({ type: "CHANGE_POPUP", payload: false });
    }
  }
  React.useEffect(() => {
    window.addEventListener("keydown", closePopUpWithEscape);
    for (let k of State.AllTodos) {
      if (k.PrepareToChanged) {
        SetValue(k.title);
      }
    }
    window.onclick = (e) => {
      if (e.target.classList.contains("App")) {
        dispatch({ type: "CHANGE_POPUP", payload: false });
      }
    };
    return () => {
      window.removeEventListener("keydown", closePopUpWithEscape);
    };
  }, []);
  function closePopUp() {
    dispatch({ type: "CHANGE_POPUP", payload: false });
  }
  function AddTodoToAllTodos() {
    for (let k of State.AllTodos) {
      if (k.PrepareToChanged) {
        k.title = Value;
        k.PrepareToChanged = false;
        dispatch({ type: "FILTER_TODO", payload: State.AllTodos });
        dispatch({ type: "CHANGE_POPUP", payload: false });
      }
    }
    if (Value.trim()) {
      let str = `${new Date()}`.split(" ");
      console.log(str);
      let finalstr =
        str[0] + " " + str[1] + " " + str[2] + " " + str[3] + " " + str[4];
      const Todo = {
        title: Value,
        Completed: false,
        PrepareToChanged: false,
        Date: finalstr,
      };
      dispatch({ type: "ADD_TODO", payload: Todo });
      SetValue("");
      closePopUp();
    }
  }
  return (
    <div className="AddTodoPopUp">
      <div className="AddTodoPopUpWriteTodo">
        <div className="WriteTodoOpisanie">
          <h2>Введите Todo</h2>
        </div>
        <div className="WriteTodoBox">
          <input
            type={"text"}
            onChange={WriteTodoName}
            value={Value}
            className="InputForWriteTodo"
          ></input>
          <button
            onClick={AddTodoToAllTodos}
            disabled={!Value}
            className="addtodo"
          >
            Добавить
          </button>
        </div>
      </div>
      <div className="CloseBox">
        <img src={close} className="Close" onClick={closePopUp}></img>
      </div>
    </div>
  );
}
