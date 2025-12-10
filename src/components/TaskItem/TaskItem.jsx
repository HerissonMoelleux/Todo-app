import React from "react";
import styles from "./TaskItem.module.css";
import deleteIcon from "../../assets/delete.svg";

function TaskItem({ isComplete, content, onDelete, onToggle }) {
  return (
    <div className={isComplete ? `${styles.item} ${styles.done}` : styles.item}>
      <div className={styles.main}>
        <input
          className={styles.input}
          type="checkbox"
          checked={isComplete}
          onChange={onToggle}
        />
        <p className={styles.text}>{content}</p>
      </div>
      <button onClick={onDelete} className={styles.taskButton}>
        <img className={styles.deleteIcon} src={deleteIcon} alt="deleteIcon" />
      </button>
    </div>
  );
}

export default TaskItem;
