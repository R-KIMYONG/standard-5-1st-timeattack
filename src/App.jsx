import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";

export default function App() {

  const [todos,setTodos]=useState([]);

  return (
    <>
      <div id="main" style={{ width: "1200px", margin: "0px auto" }}>
        <h1>투두리스트 타임어택</h1>
        <header>
          <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>mytodolist</h3>
            <h3>React</h3>
          </nav>
        </header>
        <TodoForm setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </>
  );
}
