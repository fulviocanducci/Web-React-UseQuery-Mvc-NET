import Form from "./Form";
import { useTaskCreate, useTasks } from "./hooks";
import List from "./List";

function Task() {
  const { data, refresh } = useTasks();
  const {
    mutation: { mutateAsync },
  } = useTaskCreate();
  const onSubmit = async (data, reset) => {
    await mutateAsync({ ...data, active: true });
    refresh();
    reset();
  };
  return (
    <div>
      <Form onSubmit={onSubmit} />
      <List data={data} />
    </div>
  );
}

export default Task;
