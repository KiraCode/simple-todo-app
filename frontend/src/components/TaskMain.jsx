import React, { useCallback, useEffect, useState } from "react";
import NoTask from "./NoTask";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";
import Loading from "./ui/Loading";
import ViewTask from "./ViewTask";

import fetchTaskApi from "../components/api/fetchtask.js";

const TaskMain = () => {
  const [currComponent, setCurrComponent] = useState("loading");
  const [tasks, setTasks] = useState([]);

  const showNoTaskScreen = useCallback(function () {
    setCurrComponent("noTask");
  }, []);
  const showCreateTaskScreen = useCallback(function () {
    setCurrComponent("createTask");
  }, []);
  const showTaskListSCreen = useCallback(function () {
    setCurrComponent("taskList");
  }, []);
  const showEditTaskScreen = useCallback(function () {
    setCurrComponent("editTask");
  }, []);
  const showViewTaskScreen = useCallback(function () {
    setCurrComponent("viewTask");
  }, []);

  const handleResponse = useCallback(
    function (responseData) {
      console.log(responseData);
      const extractedTasks = responseData.tasks;
      setTasks(extractedTasks);
      if (extractedTasks.length) {
        showTaskListSCreen();
      } else {
        showNoTaskScreen();
      }
    },
    [showTaskListSCreen, showNoTaskScreen]
  );
  const handleError = function (errorMsg) {
    console.log(errorMsg);
  };
  const fetchAllTasks = useCallback(
    function () {
      fetchTaskApi(handleResponse, handleError);
    },
    [handleResponse, handleError]
  );
  // inintial effect
  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks]);
  return (
    <>
      {currComponent === "loading" && <Loading />}
      <div className="container-div">
        {currComponent === "noTask" && (
          <NoTask showCreateTaskScreen={showCreateTaskScreen} />
        )}
        {currComponent === "taskList" && <TaskList />}
        {currComponent == "createTask" && <CreateTask />}
        {currComponent === "viewTask" && <ViewTask />}
        {currComponent === "editTask" && <EditTask />}
      </div>
    </>
  );
};

export default TaskMain;
