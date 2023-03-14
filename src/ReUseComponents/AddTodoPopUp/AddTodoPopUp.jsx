import React from "react";
export default function AddTodoPopUp({dispatch,State}){
    const [Value,SetValue]=React.useState('')
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
        const Todo={title:Value,Completed:false}
        dispatch({type:'ADD_TODO',payload:Todo})
        SetValue('')
        dispatch( dispatch({type:'CHANGE_POPUP',payload:false}))
    }else{
        dispatch( dispatch({type:'CHANGE_POPUP',payload:false}))
    }
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