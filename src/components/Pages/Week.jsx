import React from "react";
import { useOutletContext } from "react-router-dom";
import TaskCard from "../TaskCard/TaskCard.jsx";
import styles from "./page.module.css";

function Week() {
  const { tasks, handleAddTask, handleRemoveTask, handleToggleTask } =
    useOutletContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        This Week<span className={styles.titleCount}>{tasks.week.length}</span>
      </h1>

      <TaskCard
        title={"This Week"}
        tasks={tasks.week}
        size={"pageCard"}
        category="week"
        addTask={handleAddTask}
        removeTask={(id) => handleRemoveTask(id, "week")}
        toggleTask={(id) => handleToggleTask(id, "week")}
      />
    </div>
  );
}

export default Week;
