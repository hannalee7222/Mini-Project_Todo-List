import Todo from './Todo';

export default function TodoList({
  todo,
  setTodo,
  setCurrentTodo,
  currentTodo,
}) {
  return (
    <ul>
      {todo.map((el) => (
        <Todo
          key={el.id}
          todo={el}
          setTodo={setTodo}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
      ))}
    </ul>
  );
}
