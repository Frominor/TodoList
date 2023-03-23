import React from "react";
import "./Container.css";
import {  useSelector } from "react-redux";
import Header from "../Header/Header";
import { CSSTransition } from "react-transition-group";
import AddTodoPopUp from "../../ReUseComponents/AddTodoPopUp/AddTodoPopUp";
import Main from "../Main/Main";
export default function Container() {
  const State = useSelector((state) => state.TodoReducer);
  const ref = React.useRef(null);
  return (
    <div className="Container">
      <Header State={State} ></Header>
      <CSSTransition
        ref={ref}
        in={State.AddTodoPopUpActive}
        mountOnEnter
        unmountOnExit
        timeout={600}
        classNames="my-node"
      >
        <AddTodoPopUp  State={State}></AddTodoPopUp>
      </CSSTransition>
      
      <Main
        State={State}
        Todos={State.isActive ? State.AllTodos : State.DoneTodos}
      ></Main>
    </div>
  );
}
