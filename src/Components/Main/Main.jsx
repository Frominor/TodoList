import React from "react";
import notebook from "./notebook.png";
import { Route, Routes } from "react-router-dom";
import completed from "./correct.png";
import LinkButton from "../../ReUseComponents/Buttons/LinkButton";
import DoneTodos from "../Todos/DoneTodos/DoneTodos";
import { useDispatch, useSelector } from "react-redux";
import AllTodos from "../Todos/AllTodos/AllTodos";
import "./Main.css";
export default function Main({ Todos }) {
  const State = useSelector((state) => state.TodoReducer);
  const dispatch = useDispatch();
  const [CurrentCard, SetCurrentCard] = React.useState();
  let num = 0;
  const dragStartHandler = (e, item) => {
    SetCurrentCard(item);
  };
  const drophandler = (e, item) => {
    e.preventDefault();
    for (let k of Todos) {
      if (k.title === item.title) {
        num++;
        if (num < 2) {
          let firstindex = Todos.indexOf(k);
          let secondindex = Todos.indexOf(CurrentCard);
          let float = k;
          Todos[firstindex] = Todos[secondindex];
          Todos[secondindex] = float;
          e.target.style.background = "white";
        }
      }
    }
    if (State.isActive) {
      dispatch({ type: "FILTER_TODO", payload: Todos });
    } else {
      dispatch({ type: "FILTER_DONE_TODOS", payload: Todos });
    }
  };
  const DrugOverhandler = (e, item) => {
    e.preventDefault();
    e.target.style.background = "lightgrey";
  };
  const DrugEndhandler = (e) => {
    e.preventDefault();
    e.target.style.background = "white";
  };
  return (
    <div className="container_main">
      <div className="LeftSide">
        <LinkButton img={notebook} LinkTo={"All tasks"} to={"/"}></LinkButton>
        <LinkButton
          img={completed}
          LinkTo={"Done Todos"}
          to={"donetodos"}
        ></LinkButton>
      </div>
      <Routes>
        <Route
          index
          element={
            <AllTodos
              State={State}
              dragStartHandler={dragStartHandler}
              drophandler={drophandler}
              DrugOverhandler={DrugOverhandler}
              DrugEndhandler={DrugEndhandler}
            ></AllTodos>
          }
        ></Route>
        <Route
          path="donetodos"
          element={
            <DoneTodos
              dragStartHandler={dragStartHandler}
              DoneTodos={State.DoneTodos}
              drophandler={drophandler}
              DrugOverhandler={DrugOverhandler}
              DrugEndhandler={DrugEndhandler}
            ></DoneTodos>
          }
        ></Route>
      </Routes>
    </div>
  );
}
