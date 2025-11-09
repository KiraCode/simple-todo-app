import React from "react";
import folderImg from "../assets/folder-white.svg";
import TaskTile from "./TaskTile";

let tasks = [
  {
    title: "RCB Victory parade",
    description: "Preparing for IPL 2026",
    due_date: "05 June 2026",
  },
  {
    title: "CSK Victory parade",
    description: "Preparing for IPL 2026",
    due_date: "05 June 2026",
  },
  {
    title: "MI Victory parade",
    description: "Preparing for IPL 2026",
    due_date: "05 June 2026",
  },
];
const TaskList = () => {
  return (
    <div className="task-list-screen content-section">
      <div className="content-section-container">
        <div className="task-list-header-main">
          <p className="task-heading">🔥Task</p>
          <button className="add-task-btn cursor-pointer">
            <img src={folderImg} alt="add task icon" />
            Add New Task
          </button>
        </div>

        {/* Task List */}
        <div className="task-list-container">
          {tasks.map((task) => (
            <TaskTile key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
