import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { fetchAll } from "./_sources";

function Todos() {
  const { isError, error, data } = useQuery("todos", fetchAll);
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <Table striped bordered hover size="sm" className="mt-4" responsive="sm">
      <thead>
        <tr>
          <th className="text-center" style={{ width: "100px" }}>
            Código
          </th>
          <th className="text-center">Descrição</th>
          <th className="text-center" style={{ width: "100px" }}>
            Status
          </th>
          <th className="text-center" style={{ width: "120px" }}>
            ...
          </th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.data &&
          data.data.map((item) => (
            <tr>
              <td className="text-center">{item.id}</td>
              <td>{item.description}</td>
              <td className="text-center">{item.active.toString()}</td>
              <td className="text-center">
                <Link
                  to={`/todos/${item.id}/update`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default Todos;
