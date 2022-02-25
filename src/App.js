import "./App.css";
import Header from "./MyComponents/Header";
import TodoList from "./MyComponents/TodoList";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <>
      <Header title="My ToDo List" searchBar={false}/>
      <TodoList/>
      <Footer/>
      
    </>
  );
}

export default App;
