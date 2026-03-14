const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {

    const task = await Task.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {

  const filter = {};

  if (req.query.status) {
    filter.status = req.query.status;
  }

  const tasks = await Task.find(filter);

  res.json(tasks);
};

exports.getTaskById = async (req, res) => {

  const task = await Task.findById(req.params.id);

  res.json(task);
};

exports.updateTask = async (req, res) => {

  const task = await Task.findById(req.params.id);

  if (task.createdBy.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  Object.assign(task, req.body);

  await task.save();

  res.json(task);
};

exports.deleteTask = async (req, res) => {

  const task = await Task.findById(req.params.id);

  if (task.createdBy.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await task.deleteOne();

  res.json({ message: "Task deleted" });
};