import React, { useState } from "react";
import styles from "./TaskCard.module.css";
import addIcon from "../../assets/add.svg";
import TaskItem from "../TaskItem/TaskItem";

function TaskCard({
  title,
  tasks,
  size,
  removeTask,
  toggleTask,
  addTask,
  category,
}) {
  const [inputValue, setInputValue] = useState("");
  const taskCardStyles = `${styles.card} ${styles[size]}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue, category);
      setInputValue("");
    }
  };

  return (
    <div className={taskCardStyles}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>

        <form className={styles.inputWrapper} onSubmit={handleSubmit}>
          <button type="submit" className={styles.addButton}>
            <img src={addIcon} alt="add" className={styles.icon} />
          </button>
          <input
            className={styles.inputField}
            placeholder="Add new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>

      <div className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            onDelete={() => removeTask(task.id)}
            onToggle={() => toggleTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskCard;
