import { Alert } from "react-bootstrap";

function ErrorAlert({ message = null }) {
  return <Alert variant="danger">{message ?? "Error encontrado"}</Alert>;
}

export default ErrorAlert;
