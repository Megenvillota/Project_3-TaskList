import React, { useState } from "react";
import "./App.css";
import TaskListForm from "./Components/TaskListForm/TaskListForm";
import TaskList from "./Components/TaskList/TaskList";

export default function App() {
  const [addedTasks, setAddedTasks] = useState([]);
  const [filteredDoslist, setFilteredDoslist] = useState([]);

  const addTask = (newTask) => {
    const newAddedTasks = [...addedTasks, newTask];
    setAddedTasks(newAddedTasks);
  };

  const deleteTask = (id) => {
    const newAddedTasks = addedTasks.filter(
      (tasks) => tasks.id.toString() !== id
    );
    setAddedTasks(newAddedTasks);
  };

  /*const completeTask = () => {
    setAddedTasks(
      addedTasks.map((item) => {
        if (item.id === addedTasks.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  */

  return (
    <div className="App">
      <header>
        <TaskListForm addTask={addTask} />
        <p>
          <TaskList tasks={addedTasks} deleteTask={deleteTask}></TaskList>
        </p>
      </header>
    </div>
  );
}
