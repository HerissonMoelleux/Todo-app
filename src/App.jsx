import React, { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { removeTask, toggleTask } from "./utils/taskUtils.js";
import { INITIAL_TASKS } from "./constants/initialData.js";
import { generateId } from "./utils/idGenerator.js";

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleAddTask = useCallback((content, category) => {
    if (!content.trim()) return;

    const newTask = {
      id: generateId(),
      content: content.trim(),
      isComplete: false,
    };

    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: [...prevTasks[category], newTask],
    }));
  }, []);

  const handleRemoveTask = useCallback((id, category) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: removeTask(id, prevTasks[category]),
    }));
  }, []);

  const handleToggleTask = useCallback((id, category) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: toggleTask(id, prevTasks[category]),
    }));
  }, []);

  return (
    <div className="App">
      <Sidebar
        todayCount={tasks.today.length}
        weekCount={tasks.week.length}
        tomorrowCount={tasks.tomorrow.length}
      />

      <main className="main">
        <Outlet
          context={{
            tasks,
            handleAddTask,
            handleRemoveTask,
            handleToggleTask,
          }}
        />
      </main>
    </div>
  );
}

export default App;
