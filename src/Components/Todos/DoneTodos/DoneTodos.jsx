import React from "react";
import { useDispatch } from "react-redux";
import TodoItem from "../../../ReUseComponents/TodoItem/TodoItem";
export default function DoneTodos({DoneTodos}){
    const dispatch=useDispatch()
    const DeleteTodo=(item)=>{
        let value=item.title
        let FilteredTodos=DoneTodos.filter((todo)=>todo.title!==value)
        dispatch({type:'FILTER_DONE_TODOS',payload:FilteredTodos})
    }
    const ChangeActive=(item)=>{
      item.Completed=!item.Completed
      dispatch({type:'FILTER_DONE_TODOS',payload:DoneTodos})
    }
    return(
        <div className="DoneTodos TodosBox">
           {DoneTodos.map((item)=>{
            if(item.Completed==false){
            }else{
                return <TodoItem
                
                item={item}
                Todos={DoneTodos}
                DeleteTodo={()=>DeleteTodo(item)}
                ChangeActive={()=>ChangeActive(item)}
                   ></TodoItem>
            }
          
           })}
        </div> 
    )
}