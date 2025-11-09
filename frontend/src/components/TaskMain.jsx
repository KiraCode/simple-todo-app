import React, { useCallback, useEffect, useState } from "react";
import NoTask from "./NoTask";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";
import Loading from "./ui/Loading";
import ViewTask from "./ViewTask";

import fetchTaskApi from "../components/api/fetchtask.js";

const TaskMain = () => {
  const [currComponent, setCurrComponent] = useState("createTask");
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState([]);

  const showNoTaskScreen = useCallback(function () {
    setCurrComponent("noTask");
  }, []);
  const showCreateTaskScreen = useCallback(function () {
    setCurrComponent("createTask");
  }, []);
  const showTaskListScreen = useCallback(function () {
    setCurrComponent("taskList");
  }, []);
  const showEditTaskScreen = useCallback(function () {
    setCurrComponent("editTask");
  }, []);
  const showViewTaskScreen = useCallback(function () {
    setCurrComponent("viewTask");
  }, []);

  const handleResponse = useCallback(function (responseData) {
    console.log(responseData);
    const extractedTasks = responseData.tasks;
    setTasks(extractedTasks);
    if (extractedTasks.length) {
      showTaskListScreen();
    } else {
      showNoTaskScreen();
    }
  }, []);
  const handleError = useCallback(function (errorMsg) {
    console.log(errorMsg);
  }, []);
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

        {currComponent === "taskList" && (
          <TaskList
            tasks={tasks}
            setActiveTask={setActiveTask}
            fetchAllTasks={fetchAllTasks}
            showCreateTaskScreen={showCreateTaskScreen}
            showViewTaskScreen={showViewTaskScreen}
            showEditTaskScreen={showEditTaskScreen}
          />
        )}

        {currComponent === "createTask" && (
          <CreateTask
            fetchAllTasks={fetchAllTasks}
            showTaskListScreen={showTaskListScreen}
            showNoTaskScreen={showNoTaskScreen}
            tasks={tasks}
          />
        )}

        {currComponent === "viewTask" && (
          <ViewTask
            task={activeTask}
            showTaskListScreen={showTaskListScreen}
            fetchAllTasks={fetchAllTasks}
            setActiveTask={setActiveTask}
            showEditTaskScreen={showEditTaskScreen}
          />
        )}

        {currComponent === "editTask" && (
          <EditTask
            showTaskListScreen={showTaskListScreen}
            task={activeTask}
            fetchAllTasks={fetchAllTasks}
          />
        )}
      </div>
    </>
  );
};

export default TaskMain;
