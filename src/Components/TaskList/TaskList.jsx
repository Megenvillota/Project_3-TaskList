export default function TaskList(props) {
  const handleDelete = (e) => {
    props.deleteTask(e.target.dataset.id);
  };

  const addedTasks = props.tasks.map((tasks) => (
    <li key={tasks.id}>
      {tasks.name}
      <button data-id={tasks.id} onClick={handleDelete}>
        Delete
      </button>
    </li>
  ));
  return <ul>{addedTasks}</ul>;
}
