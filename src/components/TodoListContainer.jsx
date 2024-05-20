import styled from "@emotion/styled";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";

const TodoListContainer = () => {
  const [todos, setTodos] = useState([]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <Container>
      <TodoForm setTodos={setTodos} />
      <TodoList title="working" todos={workingTodos} setTodos={setTodos} />
      <TodoList title="done" todos={doneTodos} setTodos={setTodos} />
    </Container>
  );
};

const Container = styled.div``;

export default TodoListContainer;
