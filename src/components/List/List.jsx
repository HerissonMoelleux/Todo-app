import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../List/List.module.css";

function List({ title, lists }) {
  return (
    <div className={styles.tasksContainer}>
      <h2 className={styles.tasksTitle}>{title}</h2>
      <ul className={styles.tasksList}>
        {lists.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.tasksListItem} ${styles.isActive}`
                    : styles.tasksListItem
                }
              >
                <img
                  className={styles.tasksImg}
                  src={item.icon}
                  alt={item.title}
                />
                <p className={styles.tasksText}>{item.title}</p>
                <span className={styles.tasksCount}>{item.count}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
