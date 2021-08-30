import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsPlus } from "react-icons/bs";

const schema = yup.object().shape({
  description: yup.string().required(),
});

function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
      <div className="input-group mb-3 mt-3">
        <input type="text" {...register("description")} className={errors.description?.type === "required" ? "form-control is-invalid" : "form-control is-valid"} placeholder="Descrição" aria-label="Descrição" aria-describedby="description" />
        <button className="btn btn-primary" type="submit" id="description">
          <BsPlus /> Enviar
        </button>
      </div>
    </form>
  );
}

export default Form;
