import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./page.module.css";
import TaskCard from "../TaskCard/TaskCard.jsx";

function CategoryPage({ category, title }) {
  const { tasks, handleAddTask, handleRemoveTask, handleToggleTask } =
    useOutletContext();

  const categoryTasks = tasks[category];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {title}
        <span className={styles.titleCount}>{categoryTasks.length}</span>
      </h1>

      <TaskCard
        title={title}
        tasks={categoryTasks}
        size={"pageCard"}
        category={category}
        addTask={handleAddTask}
        removeTask={(id) => handleRemoveTask(id, category)}
        toggleTask={(id) => handleToggleTask(id, category)}
      />
    </div>
  );
}

export default CategoryPage;
