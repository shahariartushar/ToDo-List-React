import React from "react";
import Todo from "./ToDo";

const TodoList = (props) => {
  let myStyle = {
    minHeight: "100h",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">ToDo List</h3>
      {props.todos.length === 0
        ? "No List to Display"
        : props.todos.map((todo) => {
            return (
              <>
                <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                <hr />
              </>
            );
          })}
    </div>
  );
};

export default TodoList;
