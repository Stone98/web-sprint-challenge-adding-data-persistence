const router = require("express").Router();
const Task = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const data = await Task.getAll();
    for (let i = 0; i < data.length; i++) {
      let row = data[i];
      if (row.task_completed === 0) {
        row.task_completed = false;
      } else {
        row.task_completed = true;
      }
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const task = req.body;
    const data = await Task.create(task);
    if (data.task_completed === 0) {
      data.task_completed = false;
    } else {
      data.task_completed = true;
    }
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});

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
