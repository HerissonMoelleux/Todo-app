import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./page.module.css";
import TaskCard from "../TaskCard/TaskCard.jsx";

function Today() {
  const { tasks, handleAddTask, handleRemoveTask, handleToggleTask } =
    useOutletContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Today<span className={styles.titleCount}>{tasks.today.length}</span>
      </h1>

      <TaskCard
        title={"Today"}
        tasks={tasks.today}
        size={"pageCard"}
        category="today"
        addTask={handleAddTask}
        removeTask={(id) => handleRemoveTask(id, "today")}
        toggleTask={(id) => handleToggleTask(id, "today")}
      />
    </div>
  );
}

export default Today;
