import React from "react";
import notebook from './notebook.png'
import { Route,Routes } from 'react-router-dom';
import completed from './correct.png' 
import LinkButton from "../../ReUseComponents/Buttons/LinkButton";
import DoneTodos from "../Todos/DoneTodos/DoneTodos";
import AllTodos from "../Todos/AllTodos/AllTodos";
import './Main.css'
export default function Main({State,dispatch}){
    const [CurrentCard,SetCurrentCard]=React.useState()
    let num=0
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
        <div className='container_main'>
<div className='LeftSide'>
          <LinkButton img={notebook} LinkTo={'All tasks'} to={'/'} ></LinkButton>
          <LinkButton img={completed}  LinkTo={'Done Todos'} to={'donetodos'} ></LinkButton>
        </div>
        <Routes>
          <Route index element={<AllTodos
           State={State}
            dragStartHandler={dragStartHandler}
            drophandler={drophandler}
            DrugOverhandler={DrugOverhandler}
            DrugEndhandler={DrugEndhandler}
              ></AllTodos>}></Route>
          <Route path='donetodos' element={<DoneTodos 
           dragStartHandler={dragStartHandler}
           DoneTodos={State.DoneTodos}
           drophandler={drophandler}
           DrugOverhandler={DrugOverhandler}
           DrugEndhandler={DrugEndhandler}
           ></DoneTodos>}></Route>
        </Routes>
        </div>
    )
}