import React, { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Upcoming.module.css";
import TaskCard from "../../TaskCard/TaskCard.jsx";

function Upcoming() {
  const { tasks, handleAddTask, handleRemoveTask, handleToggleTask } =
    useOutletContext();

  const totalCount = useMemo(
    () => tasks.today.length + tasks.tomorrow.length + tasks.week.length,
    [tasks.today.length, tasks.tomorrow.length, tasks.week.length]
  );

  return (
    <div className={styles.upcomingContainer}>
      <h1 className={styles.title}>
        Upcoming
        <span className={styles.titleCount}>{totalCount}</span>
      </h1>
      <div className={styles.tasksContainer}>
        <TaskCard
          title="Today"
          tasks={tasks.today}
          size={"upcomingCard"}
          addTask={handleAddTask}
          category="today"
          removeTask={(id) => handleRemoveTask(id, "today")}
          toggleTask={(id) => handleToggleTask(id, "today")}
        />
        <TaskCard
          title="Tomorrow"
          tasks={tasks.tomorrow}
          size={"upcomingCard"}
          addTask={handleAddTask}
          category="tomorrow"
          removeTask={(id) => handleRemoveTask(id, "tomorrow")}
          toggleTask={(id) => handleToggleTask(id, "tomorrow")}
        />
        <TaskCard
          title="This Week"
          tasks={tasks.week}
          size={"upcomingCard"}
          addTask={handleAddTask}
          category="week"
          removeTask={(id) => handleRemoveTask(id, "week")}
          toggleTask={(id) => handleToggleTask(id, "week")}
        />
      </div>
    </div>
  );
}

export default Upcoming;
