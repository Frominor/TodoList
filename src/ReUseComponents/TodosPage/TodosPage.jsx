
import React from "react"
import add from './add.png'
import './TodosPage.css'
import { useSelector } from "react-redux"
export default function TodosPage({dispatch}){
   const State=useSelector((state)=>state.TodoReducer)
   const OpenAddTodoPopUp=()=>{
      dispatch({type:'CHANGE_POPUP',payload:true})
   }
   return (
    <div>
      <button className="AddTodo"  onClick={OpenAddTodoPopUp}><img src={add}></img></button>
    </div>
   )
}