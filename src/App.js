import { useState } from "react";
import TaskList from "./components/TaskList";
export function App(props) {
  const [tasks, setTasks] = useState([]);
  // task -> title, status (completed, not completed)
  const [currTask, setCurrTask] = useState({
    id: 1,
    title: "",
    isCompleted: false,
  });
  const handleOnInputChange = (e) => {
    setCurrTask({ ...currTask, title: e.target.value });
  };
  const handleOnAddClick = () => {
    setCurrTask({
      title: "",
      isCompleted: false,
    });
    setTasks((prev) => [{ id: prev.length + 1, ...currTask }, ...prev]);
  };
  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  return (
    <div className="App">
      <h1>Todo</h1>
      <input value={currTask.title} onChange={handleOnInputChange} />
      <button onClick={handleOnAddClick}> Add Todo </button>
      <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} />
    </div>
  );
}

// Log to console
console.log("Hello console");
