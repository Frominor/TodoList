import React from "react";
import './TodoItem.css'
import deletes from './delete.png'
import pen from './pen.png'
export default function TodoItem({item,DeleteTodo,AddToDoneTodos,ChangeActive,ChangeTodoTitle}){
return (
    <div className={item.Completed?"TodoItem Completed":'TodoItem' }>
        <div className="CheckBoxAndTitle">
        <input type={'checkbox'} className='DoneOrNot' onChange={AddToDoneTodos||ChangeActive}  checked={item.Completed?true:false}></input>
         <p className="TodoTitle">{item?.title}</p>
         </div>
                    <div className="TodoButtons">
                        <button className="DeleteTodo" onClick={()=>DeleteTodo(item)}><img src={deletes}></img></button>
                        <button className="EditTodo" onClick={ChangeTodoTitle}><img src={pen}></img></button>
                    </div>
    </div>
)
}