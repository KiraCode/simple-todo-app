import React from "react";
import UserIcon from '../assets/user-icon.png'

const CreateTask = () => {
  return (
    <div className="content-section create-task-section">
      <div className="create-task-card">
        <img src={UserIcon} alt="" width={263} />
        <h1 className="create-task-title-text">Create New Task</h1>
        {/* custom input field for title */}
        {/* custom input field for description */}
        {/* custom input field for due date */}
        <div className="add-edit-task-btns">
          <button className="add-task-btn">Add task</button>
          <button className="btn cancel-btn cursor-pointer">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
