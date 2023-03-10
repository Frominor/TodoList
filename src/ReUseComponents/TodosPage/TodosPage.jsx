
import React from "react"
import deletes from './delete.png'
import pen from './pen.png'
import add from './add.png'
import './TodosPage.css'
export default function TodosPage({Todos}){
    return (
        <div className="TodosPage">
        {Todos.map((item)=>{
            return (
                <div className="TodoItem">
                    <p>{item.title}</p>
                    <div className="TodoButtons">
                        <button className="DeleteTodo"><img src={deletes}></img></button>
                        <button className="EditTodo"><img src={pen}></img></button>
                    </div>
                </div>
            )
        })}
        <div className="Footer">
            <img src={add}></img>
        </div>
        </div>
    )
}