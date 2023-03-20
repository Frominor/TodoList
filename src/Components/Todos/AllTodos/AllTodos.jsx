import React from "react";
import { useDispatch } from "react-redux";
import TodoItem from "../../../ReUseComponents/TodoItem/TodoItem";
import TodosPage from "../../../ReUseComponents/TodosPage/TodosPage";
import './AllTodos.css'
export default function AllTodos({State}){
  const [CurrentCard,SetCurrentCard]=React.useState()
  let num=0
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
      const dragStartHandler=(e,item)=>{
        SetCurrentCard(item)
      }
      const drophandler=(e,item)=>{
        e.preventDefault()
        for(let k of State.AllTodos){
          if(k.title===item.title){
            num++
            if(num<2){
              let firstindex=State.AllTodos.indexOf(k)
            let secondindex=State.AllTodos.indexOf(CurrentCard)
            let float=k 
            State.AllTodos[firstindex]=State.AllTodos[secondindex]
            State.AllTodos[secondindex]=float
            e.target.style.background='white'
            }       
          }
        }
       dispatch({type:'FILTER_TODO',payload:State.AllTodos})
      }
      const DrugOverhandler=(e,item)=>{
        e.preventDefault()
           e.target.style.background='lightgrey'
      }
      const DrugEndhandler=(e)=>{
        
        e.preventDefault()
       e.target.style.background='white'
      }
    return(
        <div className="AllTodos TodosBox">
            {State.AllTodos.map((item)=>{
                return <TodoItem onDragStart={(e)=>dragStartHandler(e,item)} onDragLeave={(e)=>DrugEndhandler(e)} onDrugEnd={(e)=>DrugEndhandler(e)} onDrugOver={(e)=>DrugOverhandler(e,item)} onDrop={(e)=>drophandler(e,item)} item={item} DeleteTodo={DeleteTodo} AddToDoneTodos={()=>AddToDoneTodos(item)} ChangeTodoTitle={()=>ChangeTodoTitle(item)}   ></TodoItem>
            })}
             <div className="Footer">
               <TodosPage dispatch={dispatch}></TodosPage>
            </div>
        </div>
    )
}