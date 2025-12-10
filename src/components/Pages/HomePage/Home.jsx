import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "../../Button/Button.jsx";

function Home() {
  const navigate = useNavigate();

  const handleGoToTasks = () => {
    navigate("/upcoming");
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to todo-app</h1>
      <p className={styles.homeText}>
        A to-do app is a simple, user-friendly digital tool designed to help
        individuals and teams organize tasks and manage their daily activities
        efficiently. Users can create, edit, and prioritize tasks, set deadlines
        or reminders, categorize items, and track their progress, all within an
        intuitive and accessible interface. These apps are essential for
        improving productivity, reducing stress, and ensuring that important
        responsibilities are not forgotten.
      </p>

      <Button
        children={"Go to tasks"}
        size={"medium"}
        onClick={handleGoToTasks}
      />
    </div>
  );
}

export default Home;
