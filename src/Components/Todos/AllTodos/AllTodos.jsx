import React from "react";
import { useDispatch } from "react-redux";
import TodoItem from "../../../ReUseComponents/TodoItem/TodoItem";
import TodosPage from "../../../ReUseComponents/TodosPage/TodosPage";
import './AllTodos.css'
export default function AllTodos({State}){
    const dispatch=useDispatch()
    const DeleteTodo=(item)=>{
        let value=item.title
        let FilteredTodos=State.AllTodos.filter((todo)=>todo.title!==value)
        dispatch({type:'FILTER_TODO',payload:FilteredTodos})
    }
    const AddToDoneTodos=(item)=>{
      item.Completed=!item.Completed
      if(item.Completed){
        dispatch({type:'DoneTodos',payload:item})
      }else{
        let value=item.title
        let FilteredTodos=State.DoneTodos.filter((todo)=>todo.title!==value)
        dispatch({type:'FILTER_DONE_TODOS',payload:FilteredTodos})
        dispatch({type:'FILTER_TODO',payload:State.AllTodos})
      }
    }
    const ChangeTodoTitle=(item)=>{
        item.PrepareToChanged=true
       dispatch({type:'CHANGE_POPUP',payload:true})
      }
    return(
        <div className="AllTodos TodosBox">
            {State.AllTodos.map((item)=>{
                return <TodoItem item={item} DeleteTodo={DeleteTodo} AddToDoneTodos={()=>AddToDoneTodos(item)} ChangeTodoTitle={()=>ChangeTodoTitle(item)}   ></TodoItem>
            })}
             <div className="Footer">
               <TodosPage dispatch={dispatch}></TodosPage>
            </div>
        </div>
    )
}