import React from "react";
import { useDispatch } from "react-redux";
import TodoItem from "../../../ReUseComponents/TodoItem/TodoItem";
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
      }
    }
    return(
        <div className="AllTodosBox">
            {State.AllTodos.map((item)=>{
                return <TodoItem item={item} DeleteTodo={()=>DeleteTodo(item)} AddToDoneTodos={()=>AddToDoneTodos(item)} ></TodoItem>
            })}
        </div>
    )
}