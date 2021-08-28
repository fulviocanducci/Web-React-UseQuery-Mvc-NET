import { BsCaretLeftFill, BsPencil, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

function GoBack({ to }) {
  return (
    <Link className="btn btn-danger" to={to}>
      <BsCaretLeftFill /> Voltar
    </Link>
  );
}

function BtnEdit({ to }) {
  return (
    <Link to={to} className="btn btn-primary">
      <BsPencil /> Editar
    </Link>
  );
}

function BtnCreate({ to }) {
  return (
    <Link to={to} className="btn btn-primary">
      <BsPlus /> Criar
    </Link>
  );
}

export { GoBack, BtnEdit, BtnCreate };
