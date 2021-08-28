import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";

function StatusIcon({ status }) {
  if (status) {
    return <TiThumbsUp color="green" title="Ativo" />;
  }
  return <TiThumbsDown color="red" title="Inativo" />;
}

export default StatusIcon;
