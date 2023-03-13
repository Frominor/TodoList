import React from "react";
import { useDispatch } from "react-redux";
import TodoItem from "../../../ReUseComponents/TodoItem/TodoItem";
export default function DoneTodos({State}){
    console.log(State)
    const dispatch=useDispatch()
    const DeleteTodo=(item)=>{
        let value=item.title
        let FilteredTodos=State.AllTodos.filter((todo)=>todo.title!==value)
        dispatch({type:'FILTER_DONE_TODOS',payload:FilteredTodos})
    }
    return(
        <div className="DoneTodos">
           {State.DoneTodos.map((item)=>{
            if(item.Completed==false){

            }else{
                return <TodoItem item={item} Todos={State.DoneTodos} DeleteTodo={()=>DeleteTodo(item)}></TodoItem>
            }
          
           })}
        </div> 
    )
}