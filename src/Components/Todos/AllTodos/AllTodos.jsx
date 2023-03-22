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
  DeleteTodo,
}) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: "dsad", payload: true });
  }, []);

  const AddToDoneTodos = (item) => {
    item.Completed = !item.Completed;
    if (item.Completed) {
      dispatch({ type: "DoneTodos", payload: item });
    } else {
      let value = item.title;
      let FilteredTodos = State.DoneTodos.filter(
        (todo) => todo.title !== value
      );
      dispatch({ type: "FILTER_DONE_TODOS", payload: FilteredTodos });
      dispatch({ type: "FILTER_TODO", payload: State.AllTodos });
    }
  };

  const ChangeTodoTitle = (item) => {
    item.PrepareToChanged = true;
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
