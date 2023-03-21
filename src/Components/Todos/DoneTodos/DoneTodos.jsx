import React from "react";
import { useDispatch } from "react-redux";
import './DoneTodos.css'
import TodoItem from "../../../ReUseComponents/TodoItem/TodoItem";
export default function DoneTodos({DoneTodos}){
    const dispatch=useDispatch()
    const [CurrentCard,SetCurrentCard]=React.useState()
   let num=0
    React.useEffect(()=>{
     dispatch({type:'dsad',payload:false})
    },[])

    const dragStartHandler=(e,item)=>{
        SetCurrentCard(item)
      }
      const drophandler=(e,item)=>{
        e.preventDefault()
        for(let k of DoneTodos){
          if(k.title===item.title){
            num++
            if(num<2){
              let firstindex=DoneTodos.indexOf(k)
            let secondindex=DoneTodos.indexOf(CurrentCard)
            let float=k 
            DoneTodos[firstindex]=DoneTodos[secondindex]
            DoneTodos[secondindex]=float
            e.target.style.background='white'
            }       
          }
        }
       dispatch({type:'FILTER_DONE_TODOS',payload:DoneTodos})
      }
      const DrugOverhandler=(e,item)=>{
        e.preventDefault()
           e.target.style.background='lightgrey'
      }
      const DrugEndhandler=(e)=>{
        e.preventDefault()
       e.target.style.background='white'
      }
    const DeleteTodo=(item)=>{
        item.Completed=false
        let value=item.title
        let FilteredTodos=DoneTodos.filter((todo)=>todo.title!==value)
        dispatch({type:'FILTER_DONE_TODOS',payload:FilteredTodos})
    }
    const ChangeActive=(item)=>{
      item.Completed=!item.Completed
     
      dispatch({type:'FILTER_DONE_TODOS',payload:DoneTodos})
    }
    return(
        <div className={DoneTodos.length>5?"DoneTodosScroll": 'DoneTodos'}>
           {DoneTodos.map((item)=>{
            if(item.Completed==false){
            }else{
                return <TodoItem
                onDragStart={(e)=>dragStartHandler(e,item)}
                onDragLeave={(e)=>DrugEndhandler(e)}
                onDrugEnd={(e)=>DrugEndhandler(e)}
                onDrugOver={(e)=>DrugOverhandler(e,item)}
                onDrop={(e)=>drophandler(e,item)}
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