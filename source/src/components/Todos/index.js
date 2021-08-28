import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { BsPencil, BsPlus } from "react-icons/bs";

import StatusIcon from "../StatusIcon";
import Loading from "../Loading";

import { allTodos } from "./sources";
import ErrorAlert from "../ErrorAlert";

function Todos() {
  const { isError, isLoading, error, data } = useQuery("todos", allTodos);

  if (isError) return <ErrorAlert message={error.message} />;
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mt-3 text-center">
        <Link to="/todos/create" className="btn btn-primary">
          <BsPlus /> Criar
        </Link>
      </div>
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
              <tr key={item.id}>
                <td className="text-center">{item.id}</td>
                <td>{item.description}</td>
                <td className="text-center">
                  <StatusIcon status={item.active} />
                </td>
                <td className="text-center">
                  <Link to={`/todos/${item.id}/update`} className="btn btn-primary">
                    <BsPencil /> Editar
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default Todos;
