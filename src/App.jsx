import styled from "@emotion/styled";
import Layout from "./Layout.jsx";
import TodoListContainer from "./components/TodoListContainer.jsx";

const App = () => {
  return (
    <Container>
      <Layout>
        <TodoListContainer />
      </Layout>
    </Container>
  );
};

const Container = styled.div``;

export default App;
