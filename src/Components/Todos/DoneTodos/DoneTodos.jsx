import React from "react";
import { useDispatch } from "react-redux";
import "./DoneTodos.css";
import TodoItem from "../../../ReUseComponents/TodoItem/TodoItem";
export default function DoneTodos({
  DoneTodos,
  drophandler,
  dragStartHandler,
  DrugOverhandler,
  DrugEndhandler,
}) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: "dsad", payload: false });
  }, []);
  const ChangeActive = (item) => {
    item.Completed = !item.Completed;

    dispatch({ type: "FILTER_DONE_TODOS", payload: DoneTodos });
  };
  return (
    <div className={DoneTodos.length > 5 ? "DoneTodosScroll" : "DoneTodos"}>

      {DoneTodos.map((item) => {
        if (item.Completed == false) {
        } else {
          return (
            <TodoItem
              onDragStart={(e) => dragStartHandler(e, item)}
              onDragLeave={(e) => DrugEndhandler(e)}
              onDrugEnd={(e) => DrugEndhandler(e)}
              onDrugOver={(e) => DrugOverhandler(e, item)}
              onDrop={(e) => drophandler(e, item)}
              item={item}
              Todos={DoneTodos}
              ChangeActive={() => ChangeActive(item)}
            ></TodoItem>
          );
        }
      })}
    </div>
  );
}
