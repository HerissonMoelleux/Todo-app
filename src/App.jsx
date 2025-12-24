import React, { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { removeTask, toggleTask } from "./utils/taskUtils.js";
import { INITIAL_TASKS } from "./constants/initialData.js";
import { filterBySearch } from "./utils/search.js";

function App() {
  const APP_PREFIX = "myTodoApp_";

  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(`${APP_PREFIX}tasks`);
      return saved ? JSON.parse(saved) : INITIAL_TASKS;
    } catch {
      return INITIAL_TASKS;
    }
  });

  useEffect(() => {
    localStorage.setItem(`${APP_PREFIX}tasks`, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === `${APP_PREFIX}tasks` && event.newValue) {
        const updatedTasks = JSON.parse(event.newValue);
        setTasks(updatedTasks);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleAddTask = useCallback((content, category) => {
    const newTask = {
      id: Date.now(),
      content: content,
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

  const filteredTasks = React.useMemo(() => {
    if (!searchQuery) {
      return tasks;
    }
    return {
      today: filterBySearch(searchQuery, tasks.today),
      tomorrow: filterBySearch(searchQuery, tasks.tomorrow),
      week: filterBySearch(searchQuery, tasks.week),
    };
  }, [tasks, searchQuery]);

  return (
    <div className="app">
      <Sidebar
        todayCount={tasks.today.length}
        weekCount={tasks.week.length}
        tomorrowCount={tasks.tomorrow.length}
        onSearch={setSearchQuery}
      />

      <main className="main">
        <Outlet
          context={{
            tasks: filteredTasks,
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
