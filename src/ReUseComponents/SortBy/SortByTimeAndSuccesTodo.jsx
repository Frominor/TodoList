import React from "react";
import './SortByTimeAndSuccesTodo.css'
export default function SortByTimeAndSuccesTodo({State,dispatch}){
    function SortBySucces(){
        for(let i=0;i<State.AllTodos.length;i++){
            for(let j=i+1;j<State.AllTodos.length;j++){
                if(+State.AllTodos[i].Completed<State.AllTodos[j].Completed){
                    debugger
                    let float=State.AllTodos[i]
                    State.AllTodos[i]=State.AllTodos[j]
                    State.AllTodos[j]=float
                }
                
            }
        }
        dispatch({type:'FILTER_TODO',payload:State.AllTodos})
        
    }
    function SortByTime(){
        for(let i=0;i<State.AllTodos.length;i++){
            for(let j=i+1;j<State.AllTodos.length;j++){
                let first=`${State.AllTodos[i].Date}`
                let second=`${State.AllTodos[j].Date}`
           debugger
                let arr1=(first.split(' '))
                let arr2=(second.split(' '))
                        if(arr1[4].split(':')<arr2[4].split(':')){
                            let float=State.AllTodos[i]
                            State.AllTodos[i]=State.AllTodos[j]
                            State.AllTodos[j]=float
                        }
            } 

        }
        dispatch({type:'FILTER_TODO',payload:State.AllTodos})
    }
    return(
        <div>
            <div>
              <h1 className="SortZagolovok">Сортировать по</h1>
            </div>
            <div>
            <button className="SortBtn SortTime" onClick={SortByTime}>Времени</button>
            <button className="SortBtn SortTodos" onClick={SortBySucces}>Выполненным задачам</button>
            </div>
        </div>
    )
}