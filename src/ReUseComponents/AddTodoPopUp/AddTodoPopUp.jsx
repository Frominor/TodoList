import React from "react";
import { useDispatch } from "react-redux";

export default function AddTodoPopUp(){
    const dispatch=useDispatch()
    const [Value,SetValue]=React.useState('')
    function WriteTodoName(e){
     SetValue(e.target.value)
     console.log(Value)
    }
   function AddTodoToAllTodos(){
    const Todo={title:Value,Completed:false}
     dispatch({type:'ADD_TODO',payload:Todo})
     SetValue('')
     dispatch( dispatch({type:'CHANGE_POPUP',payload:false}))
   }
    return(
        <div className="AddTodoPopUp">
            <div className="AddTodoPopUpHeader">
                <h2>Введите название Todo</h2>
                <input type={'text'} onChange={WriteTodoName} value={Value}></input>
                <button onClick={AddTodoToAllTodos}>Добавить</button>
            </div>
            <div className="WeatherCalendar"></div>
        </div>
    )
}