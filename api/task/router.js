const router = require("express").Router(); // sets up tasks router
const Task = require("./model"); // imports tasks model functions

// route to GET all tasks
router.get("/", async (req, res, next) => {
  try {
    const data = await Task.getAll(); // store all tasks in data variable
    for (let i = 0; i < data.length; i++) {
      // loop over each tasks in data
      let row = data[i]; // assign each task to row by using its own index
      if (row.task_completed === 0) {
        // if 0 make task_completed false, otherwise make it true
        row.task_completed = false;
      } else {
        row.task_completed = true;
      }
    }
    res.status(200).json(data); // respond with all tasks with task_compeleted either true or false
  } catch (err) {
    // if error occurs, send it to the error handling middleware
    next(err);
  }
});

// route to POST a new task
router.post("/", async (req, res, next) => {
  try {
    const task = req.body;
    const data = await Task.create(task); // store new task in data variable
    if (data.task_completed === 0) {
      // if 0 make task_completed false, otherwise make it true
      data.task_completed = false;
    } else {
      data.task_completed = true;
    }
    res.status(201).json(data); // responds with newly created task
  } catch (err) {
    // if error occurs, send it to the error handling middleware
    next(err);
  }
});

// error handling middleware for errors that occur in tasks router
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    sageAdvice: "Finding the real error is 90% of the bug fix",
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;
