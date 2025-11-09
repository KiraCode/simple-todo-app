import React from "react";
import Modal from "./ui/Modal";
import checkedblue from "../assets/blue-checked.svg";
import { AlarmClockCheck, FilePenLine, Trash2, X } from "lucide-react";

let task = {
  id: 1,
  title: "RCB Victory parade",
  description: "Preparing for IPL 2026",
  due_date: "05 June 2026",
};

const ViewTask = () => {
  return (
    <Modal isOpen={true}>
      <div className="flex justify-between view-task-header">
        <div className="flex">
          <span className="task-icon-wrapper">
            <img src={checkedblue} alt="task icon" className="task-icon" />
          </span>
          <h2 className="view-task-title">{task.title}</h2>
        </div>
        <div className="close-modal-btn">
          <X style={{ color: "black" }} />
        </div>
      </div>

      <div className="flex">
        <pre className="view-task-description">{task.description}</pre>
        <div className="view-task-right-section">
          {task.due_date && (
            <div className="view-task-info-box">
              <p className="label-14">Due Date</p>
              <div className="flex date-container">
                <AlarmClockCheck style={{ color: "blue" }} />
                <p className="date-text">{task.due_date}</p>
              </div>
            </div>
          )}
          <div className="view-task-info-box flex cursor-pointer">
            <FilePenLine style={{ color: "green", marginRight: "10px" }} />
            <p className="label-12">Edit Task</p>
          </div>
          <div className="view-task-info-box flex cursor-pointer">
            <Trash2 style={{ color: "red", marginRight: "10px" }} />
            <p className="label-12">Delete Task</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewTask;
