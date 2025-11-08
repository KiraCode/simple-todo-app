import Task from "../models/taskModel.js";

const newTask = async (req, res) => {
  try {
    // 1.extract data from the body
    const { title, description, due_date } = req.body;

    // validation on the incoming data
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description not found" });
    }

    // create document based on the schema
    const newTask = await Task.create({ title, description, due_date });

    // success Response
    res.status(200).json({
      success: true,
      message: "Task Created Successfully",
      task: newTask,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Failed to Create taskCreated",
      task: newTask,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    // get all the task from mongodb
    const tasks = await Task.find({});

    res.status(200).json({
      success: true,
      tasks,
      message: "fetched all task successfully",
    });
  } catch (error) {
    console.error("Failed to fetch error", error);
    res.status(400).json({
      success: false,
      message: "Failed to fetch Task",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    // get the data to update, from body
    const { id } = req.params;

    // get the id from params
    const { title, description, due_date } = req.body;

    // validation on body and id
    if (!id) {
      return res.status(400).json({ message: "task id is required" });
    }

    // find the document according to the id
    const task = await Task.findById(id);

    // update the document
    if (title) task.title = title;
    if (description) task.description = description;
    if (due_date) task.due_date = due_date;
    if (!due_date) task.due_date = null;

    // save the dpcument
    const updatedTask = await task.save();

    // send a response
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.error("failed to update the task");

    res.status(400).json({
      success: false,
      message: "Failed to update the task",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "No id provided" });
    }
    await Task.findByIdAndDelete(id);
    res.status(200).json({
      success: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Error in deleting task", error);
    res.status(400).json({
      success: false,
      message: "Task deleted unsuccessfully",
    });
  }
};
export { newTask, getTasks, updateTask, deleteTask };
