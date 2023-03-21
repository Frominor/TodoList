import React from "react";
import './Container.css'
import { useDispatch, useSelector } from 'react-redux';
import Header from "../Header/Header";
import { CSSTransition } from "react-transition-group";
import AddTodoPopUp from "../../ReUseComponents/AddTodoPopUp/AddTodoPopUp";
import Main from "../Main/Main";
export default function Container(){
    const dispatch=useDispatch()
  const State=useSelector(state=>state.TodoReducer)
    const ref=React.useRef(null)
    return(
        <div className="Container">
 <Header State={State} dispatch={dispatch}></Header>
      <CSSTransition ref={ref} in={State.AddTodoPopUpActive} mountOnEnter unmountOnExit timeout={600} classNames='my-node'>
         <AddTodoPopUp dispatch={dispatch} State={State}></AddTodoPopUp>
      </CSSTransition>
     <Main State={State} dispatch={dispatch}></Main>
        </div>
    )
}