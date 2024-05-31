import Task from "./Task";
const TaskList = ({ tasks, toggleTaskStatus }) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {tasks.map((task) => (
        <Task task={task} key={task.id} toggleTaskStatus={toggleTaskStatus} />
      ))}
    </ul>
  );
};
export default TaskList;
