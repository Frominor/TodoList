import React from "react";
import "./Header.css";
import SortByTimeAndSuccesTodo from "../../ReUseComponents/SortBy/SortByTimeAndSuccesTodo";
export default function Header({ State}) {
  return (
    <div className="container_header header">
      <div className="Zagolovok_Box">
        <h1 className="container_header_zagolovok">
          My Todo List-{State.isActive ? "All Tasks" : "Done Todos"}
        </h1>
      </div>
      <div className="SortBy">
        <SortByTimeAndSuccesTodo
          isActive={State.isActive}
          State={State.isActive ? State.AllTodos : State.DoneTodos}
        ></SortByTimeAndSuccesTodo>
      </div>
    </div>
  );
}
