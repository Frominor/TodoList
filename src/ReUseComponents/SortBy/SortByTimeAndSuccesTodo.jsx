import React from "react";
import { useDispatch } from "react-redux";
import "./SortByTimeAndSuccesTodo.css";
export default function SortByTimeAndSuccesTodo({ State,  isActive }) {
  const dispatch=useDispatch()
  function SortBySucces() {
    for (let i = 0; i < State.length; i++) {
      for (let j = i + 1; j < State.length; j++) {
        if (+State[i].Completed < State[j].Completed) {
          let float = State[i];
          State[i] = State[j];
          State[j] = float;
        }
      }
    }
    dispatch({ type: "FILTER_TODO", payload: State });
  }
  function SortByTime() {
    for (let i = 0; i < State.length; i++) {
      for (let j = i + 1; j < State.length; j++) {
        let first = `${State[i].Date}`;
        let second = `${State[j].Date}`;
            console.log(first)
        let arr1 = first.split(" ");
        console.log(arr1)
        let arr2 = second.split(" ");
        
        if (arr1[4].split(":") < arr2[4].split(":")) {
          let float = State[i];
          State[i] = State[j];
          State[j] = float;
        }
      }
    }

    if (isActive) {
      dispatch({ type: "FILTER_TODO", payload: State });
    } else {
      dispatch({ type: "FILTER_DONE_TODOS", payload: State });
    }
  }
  return (
    <div>
      <div>
        <h1 className="SortZagolovok">Сортировать по</h1>
      </div>
      <div>
        <button className="SortBtn SortTime" onClick={SortByTime}>
          Времени
        </button>
        <button className="SortBtn SortTodos" onClick={SortBySucces}>
          Выполненным задачам
        </button>
      </div>
    </div>
  );
}
