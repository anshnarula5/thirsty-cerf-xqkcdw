const Task = ({ task, toggleTaskStatus }) => {
  const handleOnChange = () => {
    toggleTaskStatus(task.id);
  };
  return (
    <li>
      <input
        onChange={handleOnChange}
        type="checkbox"
        checked={task.isCompleted}
      />
      <span style={{ color: task.isCompleted ? "green" : "red" }}>
        {task.title}
      </span>
    </li>
  );
};

export default Task;
