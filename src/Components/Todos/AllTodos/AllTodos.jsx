import React from "react";
import { useDispatch } from "react-redux";
import TodoItem from "../../../ReUseComponents/TodoItem/TodoItem";
import TodosPage from "../../../ReUseComponents/TodosPage/TodosPage";
import "./AllTodos.css";
export default function AllTodos({
  State,
  dragStartHandler,
  drophandler,
  DrugOverhandler,
  DrugEndhandler,
}) {
  const dispatch = useDispatch();
  const DeleteTodo=(item)=>{
    dispatch({type:'FILTER_TODO',payload:item})
  }
  React.useEffect(() => {
    dispatch({ type: "dsad", payload: true });
  }, []);

  const AddToDoneTodos = (item) => {
    item.Completed = !item.Completed;
    if (item.Completed) {
      dispatch({ type: "DoneTodos", payload: item });
    } else {
      dispatch({ type: "FILTER_DONE_TODOS", payload: item.title });
    }
  };

  const ChangeTodoTitle = (item) => {
    dispatch({type:'PREPARE_TO_CHANGE',payload:item.title})
    dispatch({ type: "CHANGE_POPUP", payload: true });
  };
  return (
    <div className="AllTodosBox">
      <div
        className={
          State.AllTodos.length > 5
            ? "AllTodosScroll TodosBox"
            : "AllTodos TodosBox"
        }
      >
        {State.AllTodos.map((item) => {
          return (
            <TodoItem
              onDragStart={(e) => dragStartHandler(e, item)}
              onDragLeave={(e) => DrugEndhandler(e)}
              onDrugEnd={(e) => DrugEndhandler(e)}
              onDrugOver={(e) => DrugOverhandler(e, item)}
              onDrop={(e) => drophandler(e, item)}
              item={item}
              DeleteTodo={(item) => DeleteTodo(item)}
              AddToDoneTodos={() => AddToDoneTodos(item)}
              ChangeTodoTitle={() => ChangeTodoTitle(item)}
            ></TodoItem>
          );
        })}
      </div>
      <div className="Footer">
        <TodosPage dispatch={dispatch}></TodosPage>
      </div>
    </div>
  );
}
