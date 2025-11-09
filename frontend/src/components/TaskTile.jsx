import React from "react";
import CheckedBlue from "../assets/blue-checked.svg";
import AlarmClock from "../assets/alarm-clock.svg";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";

const TaskTile = ({ task }) => {
  return (
    <>
      <div className="task-tile-container cursor-pointer">
        <span className="task-icon-wrapper">
          <img src={CheckedBlue} className="task-icon" alt="Task icon" />
        </span>
        <div className="task-text-wrapper">
          <p className="task-primary-text">{task.title}</p>
          <p className="task-secondary-text">{task.description}</p>
        </div>
        <div className="action-items-container">
          {task.due_date && (
            <div className="flex date-container">
              <img src={AlarmClock} alt="clock-icon" />
              <p className="date-text">{task.due_date}</p>
            </div>
          )}
          <div className="delete-container cursor-pointer">
            <img src={Edit} alt="Edit Task Icon" />
          </div>
          <div className="delete-container cursor-pointer">
            <img src={Delete} alt="Delete Task Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskTile;
