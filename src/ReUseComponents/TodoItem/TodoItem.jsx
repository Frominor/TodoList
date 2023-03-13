import React from "react";
import './TodoItem.css'
import deletes from './delete.png'
import pen from './pen.png'
import { useDispatch, useSelector } from "react-redux";
export default function TodoItem({item,DeleteTodo,AddToDoneTodos}){
    console.log(DeleteTodo)
return (
    <div className={item.Completed?"TodoItem Completed":'TodoItem' }>
        <div className="CheckBoxAndTitle">
            <input type={'checkbox'} className='DoneOrNot' onClick={AddToDoneTodos} checked={item.Completed?true:false}></input>
         <p className="TodoTitle">{item?.title}</p>
         </div>
                    <div className="TodoButtons">
                        <button className="DeleteTodo" onClick={DeleteTodo}><img src={deletes}></img></button>
                        <button className="EditTodo"><img src={pen}></img></button>
                    </div>
    </div>
)
}