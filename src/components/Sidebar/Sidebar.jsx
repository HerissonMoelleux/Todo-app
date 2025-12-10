import React, { useMemo } from "react";
import styles from "./Sidebar.module.css";
import upcomingIcon from "../../assets/upcoming.svg";
import listIcon from "../../assets/list.svg";
import List from "../List/List.jsx";
import redIcon from "../../assets/red.svg";
import greenIcon from "../../assets/green.svg";
import blueIcon from "../../assets/blue.svg";

const listsList = [
  { id: 1, icon: redIcon, title: "Study", count: "0", path: "/study" },
  { id: 2, icon: greenIcon, title: "Personal", count: "0", path: "/personal" },
  { id: 3, icon: blueIcon, title: "Work", count: "0", path: "/work" },
];

function Sidebar({ todayCount = 0, weekCount = 0, tomorrowCount = 0 }) {
  const tasksList = useMemo(
    () => [
      {
        id: 1,
        icon: upcomingIcon,
        title: "Upcoming",
        count: todayCount + tomorrowCount + weekCount,
        path: "/upcoming",
      },
      {
        id: 2,
        icon: listIcon,
        title: "Today",
        count: todayCount,
        path: "/today",
      },
      {
        id: 3,
        icon: listIcon,
        title: "Tomorrow",
        count: tomorrowCount,
        path: "/tomorrow",
      },
      {
        id: 4,
        icon: listIcon,
        title: "This Week",
        count: weekCount,
        path: "/week",
      },
    ],
    [todayCount, tomorrowCount, weekCount]
  );

  return (
    <div className={styles.sidebarContainer}>
      <h1 className={styles.title}>Menu</h1>
      <div className={styles.searchBox}>
        <input className={styles.search} type="text" placeholder="Search..." />
      </div>

      <List title={"Tasks"} lists={tasksList} />
      <List title={"Lists"} lists={listsList} />
    </div>
  );
}

export default Sidebar;
