import React from "react";
import { GetYourCoords } from "../../State/AsyncActions/AsyncGetCoord";
import { GetWeather } from "../../State/AsyncActions/AsyncGetWeather";
import { debounce } from "lodash-es";
import './AddTodoPopUp.css'
export default function AddTodoPopUp({dispatch,State}){
    const [Value,SetValue]=React.useState('')
    function WriteTodoName(e){
     SetValue(e.target.value)
     GetWeatherInTown()
    }
    React.useEffect(()=>{
      for(let k of State.AllTodos){
        if(k.PrepareToChanged==true){
            SetValue(k.title)
        } 
      }
    },[])
  
    const makeRequest=React.useCallback(  
        debounce((e)=>{
            return FindCityAndWeather(e)
        },300),
    [])
        const FindCityAndWeather=(e)=>{
              let value=e.target.value
              dispatch(GetYourCoords(value))
              dispatch(GetWeather(State))
        }
    function GetWeatherInTown(){
        dispatch(GetWeather(State))
    }
    async function AddTodoToAllTodos(){
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
        const Todo={title:Value,Completed:false,Weather:State.Weather?.weather[0]?.description,temp:State?.Weather?.main.feels_like,City:State.Weather.name}
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
            </div>
            <div>
                <h2>Введите  названия города для  того,чтобы узнать,помешает ли погода вашем делам</h2>
                <input type={'text'} onChange={(e)=>makeRequest(e)} ></input>
            </div>
            

        </div>
    )
}