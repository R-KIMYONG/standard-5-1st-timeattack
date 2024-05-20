import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, setTodos }) {
  return (
    <>
      <TodoItem todos={todos} setTodos={setTodos} iswork={false} />
      <TodoItem todos={todos} setTodos={setTodos} iswork={true} />
    </>
  );
}
