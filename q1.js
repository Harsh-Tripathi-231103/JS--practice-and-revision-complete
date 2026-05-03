const express = require("express");

const app = express();
app.use(express.json());

let tasks = [];
let idCounter = 1;

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title, completed = false } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = {
    id: idCounter++,
    title,
    completed
  };

  tasks.push(task);

  res.status(201).json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const taskExists = tasks.some(task => task.id === id);

  if (!taskExists) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks = tasks.filter(task => task.id !== id);

  res.status(200).json({ message: "Task deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});