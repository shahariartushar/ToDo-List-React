import React,{useState} from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import TodoList from "./MyComponents/TodoList";
import Footer from "./MyComponents/Footer";

function App() {
  const onDelete = (todo) =>{
    console.log("delete", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the prayer hall",
      desc: "You need to go the prayer hall to get this job done",
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You need to go the gym to get this job done",
    },
    {
      sno: 3,
      title: "Go to the university",
      desc: "You need to go the university to get this job done",
    },
  ]);
  return (
    <>
      <Header title="My ToDo List" searchBar={false} />
      <TodoList todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
