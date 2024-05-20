import styled from "@emotion/styled";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ title, todos, setTodos }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div``;

export default TodoList;
