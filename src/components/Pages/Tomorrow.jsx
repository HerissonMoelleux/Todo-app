import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./page.module.css";
import TaskCard from "../TaskCard/TaskCard.jsx";

function Tomorrow() {
  const { tasks, handleAddTask, handleRemoveTask, handleToggleTask } =
    useOutletContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Tomorrow
        <span className={styles.titleCount}>{tasks.tomorrow.length}</span>
      </h1>

      <TaskCard
        title={"Tomorrow"}
        tasks={tasks.tomorrow}
        size={"pageCard"}
        category="tomorrow"
        addTask={handleAddTask}
        removeTask={(id) => handleRemoveTask(id, "tomorrow")}
        toggleTask={(id) => handleToggleTask(id, "tomorrow")}
      />
    </div>
  );
}

export default Tomorrow;
