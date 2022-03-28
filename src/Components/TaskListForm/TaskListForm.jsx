import { useState } from "react";

export default function TaskListForm(props) {
  const [nextId, setNextId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskField = document.querySelector("[name=task-name]");
    if (taskField.value.trim().length > 0) {
      props.addTask({
        name: taskField.value,
        id: nextId,
      });
      taskField.value = "";
      setNextId(nextId + 1);
    }
  };

  return (
    <form action="Add" method="GET" onSubmit={handleSubmit}>
      <label>
        <input type="text" name="task-name" />
        <button>Add Task</button>
      </label>
    </form>
  );
}
