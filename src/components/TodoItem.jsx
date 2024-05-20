import styled from "@emotion/styled";

const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;

  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <button onClick={toggleTodo}>{isDone ? "취소" : "완료"}</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </Container>
  );
};

const Container = styled.div``;

export default TodoItem;
