import { useState } from "react";
import { Form, Row, Col, Button, ListGroup } from "react-bootstrap";
import { useTodos, useTodosCreate } from "./hooks";

function App() {
  const [description, setDescription] = useState("");
  const { isError, isLoading, error, data, refetch } = useTodos();
  const mutation = useTodosCreate();
  async function onHandleSubmit(e) {
    e.preventDefault();
    await mutation.mutateAsync({ description, active: true });
    await refetch();
  }
  return (
    <div className="container mt-3">
      <Form onSubmit={onHandleSubmit}>
        <Row>
          <Col md={8} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
          <Col md={4} className="d-grid mb-2">
            <Button variant="primary" type="submit">
              Adicionar
            </Button>
          </Col>
        </Row>
      </Form>
      <div className="mt-3">
        <ListGroup>
          {data &&
            data.data &&
            data.data.map(function (item, index) {
              return (
                <ListGroup.Item key={index + item.id}>
                  {item.description}
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
