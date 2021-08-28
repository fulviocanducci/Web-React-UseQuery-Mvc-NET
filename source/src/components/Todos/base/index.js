import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { BsPencil, BsPlus, BsCaretLeftFill } from "react-icons/bs";

const schema = yup.object().shape({
  description: yup.string().required().min(2).max(100),
});

function FormBase({ onSubmit, defaultValues }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          type="text"
          maxLength={100}
          placeholder="Digite a descrição"
          {...register("description")}
        />
        <Form.Text className="text-danger">
          {errors.description?.type === "required" && "Descrição é obrigatório"}
          {errors.description?.type === "min" &&
            "Descrição com no minimo 2 caracteres"}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={"Status"} {...register("active")} />
      </Form.Group>
      <Button type="submit" variante="primary">
        {getValues("id") ? <BsPencil /> : <BsPlus />}
        {getValues("id") ? " Editar" : " Criar"}
      </Button>{" "}
      <Link className="btn btn-danger" to="/todos">
        <BsCaretLeftFill /> Voltar
      </Link>
    </Form>
  );
}

export default FormBase;
