import React from "react";
import { Calendar } from "react-calendar";
import { GetYourCoords } from "../../State/AsyncActions/AsyncGetCoord";
import { GetWeather } from "../../State/AsyncActions/AsyncGetWeather";
import './AddTodoPopUp.css'
export default function AddTodoPopUp({dispatch,State}){
    const [Value,SetValue]=React.useState('')
    const [City,SetCity]=React.useState('')
    const [date,SetDate]=React.useState(new Date())
    function WriteTodoName(e){
     SetValue(e.target.value)
    }
    React.useEffect(()=>{
      for(let k of State.AllTodos){
        if(k.PrepareToChanged==true){
            SetValue(k.title)
        } 
      }
    },[])
    function AddTown(e){
        SetCity(e.target.value)
    }
    function GetUserCoords(){
        dispatch(GetYourCoords(City))
    }
    function GetWeatherInTown(){
        dispatch(GetWeather(State))
    }
   function AddTodoToAllTodos(){
    for(let k of State.AllTodos){
        if(k.PrepareToChanged==true){
            k.title=Value
            k.PrepareToChanged=false
            dispatch({type:'FILTER_TODO',payload:State.AllTodos})
            dispatch( dispatch({type:'CHANGE_POPUP',payload:false}))
            return 
        }
       
    }
    if(+Value!=''){
        const Todo={title:Value,Completed:false,Weather:State.Weather}
        console.log(Todo)
        dispatch({type:'ADD_TODO',payload:Todo})
        SetValue('')
        dispatch( dispatch({type:'CHANGE_POPUP',payload:false}))
    }else{
        dispatch( dispatch({type:'CHANGE_POPUP',payload:false}))
    }
   }
    return(
        <div className="AddTodoPopUp">
            <div className="AddTodoPopUpWriteTodo">
                <h2>Введите название Todo</h2>
                <input type={'text'} onChange={WriteTodoName} value={Value}></input>
                <button onClick={AddTodoToAllTodos}>Добавить</button>
                <button onClick={GetUserCoords}></button>
            </div>
            <div>
                <h2>Введите город,в котором будет Todo</h2>
                <input type={'text'} onChange={(e)=>AddTown(e)} value={City}></input>
            </div>
            <div className="WeatherCalendar">
                 <Calendar value={date} onChange={SetDate}></Calendar>
            </div>
<button onClick={GetWeatherInTown}>Жопа</button>
        </div>
    )
}