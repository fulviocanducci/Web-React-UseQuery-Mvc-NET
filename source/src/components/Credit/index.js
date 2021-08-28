import { Table } from "react-bootstrap";
import Paginated from "../Paginated";
import StatusIcon from "../StatusIcon";
import { BtnCreate, BtnEdit } from "../Button";
import { useCreditPageList } from "./hooks";

function Credit() {
  const { data, setPage } = useCreditPageList();
  return (
    <>
      <div className="mt-3 text-center">
        <BtnCreate to="/credit/create" />
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
            data.items &&
            data.items.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.id}</td>
                <td>{item.description}</td>
                <td className="text-center">
                  <StatusIcon status={item.active} />
                </td>
                <td className="text-center">
                  <BtnEdit to={`/credit/${item.id}/update`} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="text-center">
        <Paginated count={data?.pageCount} onPageChange={(e) => setPage(e.selected + 1)} />
      </div>
    </>
  );
}

export default Credit;
