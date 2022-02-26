import React from "react";
import Todo from "./ToDo";

const TodoList = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">ToDo List</h3>
      {props.todos.length===0 ? "No List to Display" :
      props.todos.map((todo)=>{
        return  <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
    }
    </div>
  );
};

export default TodoList;
